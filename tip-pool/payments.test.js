describe('payments test with setup and tear down', function() {
	beforeEach(function() {
		//initialization logic
		billAmtInput.value = 100;
		tipAmtInput.value = 20;
	});

	it('testing submitPaymentInfo() to add a new payment to allPayments', function() {
		submitPaymentInfo();
		expect(allPayments).toEqual({ payment1: { billAmt: '100', tipAmt: '20', tipPercent: 20 } });
		expect(allPayments['payment1'].tipAmt).toEqual('20');
		expect(Object.keys(allPayments).length).toEqual(1);
	});
	it('testing createCurPayment()', function() {
		expect(createCurPayment()).toEqual({
			billAmt: '100',
			tipAmt: '20',
			tipPercent: 20
		});
	});
	it('testing appendPaymentTable() to create new td and append to tbody', function() {
		let curPayment = createCurPayment();
		allPayments['payment1'] = curPayment;

		appendPaymentTable(curPayment);

		let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

		expect(paymentTbody.innerHTML).toBeTruthy();
	});
	it('should not create payment with empty input on createCurPayment()', function() {
		billAmtInput.value = '';
		tipAmtInput.value = '';
		let curPayment = createCurPayment();

		expect(curPayment).toBeFalsy;
	});
	afterEach(function() {
		// teardown logic
		billAmtInput.value = '';
		tipAmtInput.value = '';
		paymentTbody.innerHTML = '';
		summaryTds[0].innerHTML = '';
		summaryTds[1].innerHTML = '';
		summaryTds[2].innerHTML = '';
		serverTbody.innerHTML = '';
		allPayments = {};
		paymentId = 0;
	});
});
