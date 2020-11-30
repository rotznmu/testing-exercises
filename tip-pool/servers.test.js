describe('Servers test (with setup and tear-down)', function() {
	beforeEach(function() {
		// initialization logic
		serverNameInput.value = 'Alice';
	});

	it('should add a new server to allServers on submitServerInfo()', function() {
		submitServerInfo();

		expect(Object.keys(allServers).length).toEqual(1);
		expect(allServers['server' + serverId].serverName).toEqual('Alice');
	});

	it('Should append new TR on tbody on updateServerTable()', function() {
		updateServerTable();
		expect(serverTbody.children.length).toBeTruthy();
		//expect(serverTbody.children.length).toEqual(1);
	});
	afterEach(function() {
		// teardown logic
		serverId = 0;
		serverTbody.innerHTML = '';
		allServers = {};
	});
});
