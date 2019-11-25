describe('Login Page UI Elements Test', function() {
    it('Login Form visible', function() {
      cy.eyesOpen({
        appName: 'Applitool Hackathon 2019',
        testName: 'Visual AI test',
     }); 
     
      cy.visit('https://demo.applitools.com/hackathon.html');
      cy.eyesCheckWindow('Login Page');
    })
 })
  describe('Data-Driven Test', function() {
    it('dont enter username and password and try to login', function() {
      cy.get('#log-in').click();
      cy.eyesCheckWindow('Username and Password must be present');
})
    it('dont enter password and try to login', function() {
      cy.get('#username').type('admin');
      cy.get('#log-in').click();
      cy.eyesCheckWindow('Password must be present');
    })
    it('dont enter username and try to login', function() {
      cy.get('#username').clear();
      cy.get('#password').type('admin');
      cy.get('#log-in').click();
      cy.eyesCheckWindow('Username must be present');
    })
    it('positive case:enter both and login', function() {
      cy.get('#username').type('admin');
      cy.get('#password').type('admin');
      cy.get('#log-in').click();
      cy.eyesCheckWindow('Profile page').fully;
    })
  })
    describe('Table Sort Test', function() {
    it('Table Sort Test', function() {
     cy.get('#amount').click();
     cy.wait(5000);
     cy.eyesCheckWindow('Sorted Ascending');
    })
  })
  describe('Canvas Chart Test', function() {
    it('to check 2017 and 2018 canvas', function() {
      cy.get('#showExpensesChart').click();
      cy.wait(5000);
      cy.eyesCheckWindow('2017-18 Data');
    })
    it('to check 2017,2018 and 2019 canvas', function() {
      cy.get('#addDataset').click();
      cy.eyesCheckWindow('2017,2018 & 2019 Data');
    })
  })
  describe('Dynamic Content Test', function(){
    it('Flashsale visibility', function() {
      cy.visit('https://demo.applitools.com/hackathon.html?showAd=true'); 
      cy.get('#username').type('admin');
      cy.get('#password').type('admin');
      cy.get('#log-in').click();
      cy.eyesCheckWindow('Flash Sale');
      cy.eyesClose();
    })
  })
