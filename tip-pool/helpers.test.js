describe('testing the minor functions in helpers', function() {
	beforeEach(function() {
		//initializiation logic
		tipAmtInput.value = 20;
		billAmtInput.value = 100;
		submitPaymentInfo();
	});

	it('sum totals from allPayments objects on sumPaymentTotal()', function() {
		expect(sumPaymentTotal('tipAmt')).toEqual(20);
		billAmtInput.value = 300;
		tipAmtInput.value = 55;
		submitPaymentInfo();

		expect(sumPaymentTotal('tipAmt')).toEqual(75);
	});

	it('convert bill and tip amount into a tip percent on calculateTipPercent', function() {
		expect(calculateTipPercent(100, 25)).toEqual(25);
	});

	it('accept a tr element and append a new td element from the value on appendTd()', function() {
		let newTr = document.createElement('tr');

		appendTd(newTr, 'test');

		expect(newTr.children.length).toEqual(1);
		expect(newTr.firstChild.innerHTML).toEqual('test');
	});
	it('using appendDeletebtn() test to see if the functional td is created', function() {
		let newTr = document.createElement('tr');
		appendDeleteBtn(newTr);

		expect(newTr.firstChild.innerText).toEqual('X');
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
