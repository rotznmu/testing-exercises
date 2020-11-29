it('should calculate the monthly rate correctly', function() {
	const values1 = { amount: 20000, years: 20, rate: 4.5 };
	const values2 = { amount: 50000, years: 30, rate: 5.5 };
	expect(calculateMonthlyPayment(values1)).toEqual('126.53');
	expect(calculateMonthlyPayment(values2)).toEqual('283.89');
});

it('should return a result with 2 decimal places', function() {
	const values = {
		amount: 123456,
		years: 90,
		rate: 12.5
	};
	expect(calculateMonthlyPayment(values)).toEqual('1286.02');
});

/// etc
