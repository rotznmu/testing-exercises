describe('testing the minor functions in helpers', function() {
	beforeEach(function() {
		//initializiation logic
		tipAmtInput.value = 100;
		billAmtInput.value = 20;
	});

	/*     it('sum totals from allPayments objects on sumPaymentTotal()', function() {
        sumPaymentTotal()

        expect()

    }) */

	it('convert bill and tip amount into a tip percent on calculateTipPercent', function() {
		expect(calculateTipPercent(100, 20).toEqual(20));
	});

	/*     it('accept a tr element and append a new td element from the value on appendTd(),' function() {
        appendTd(????)
    })
    afterEach(function() {
		// teardown logic
		
	}); */
});
