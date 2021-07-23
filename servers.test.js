describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  });
  //had these tests run in order - not randomly

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should increment serverId by 1 on submitServerInfo()', () => {
    submitServerInfo();

    expect(serverId).toEqual(1);
  })
  
  it('should append new server on the table with appriopriate id from object key on updateServerTable()', () => {
    submitServerInfo();

    expect(serverTbody.lastElementChild.id).toEqual('server1');
  })

  afterEach(function() {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverNameInput.value = '';
    serverTbody.innerHTML = '';
  });
});
