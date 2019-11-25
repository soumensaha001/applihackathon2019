describe('Login Page UI Elements Test', function() {
    it('Login Form visible', function() {
       
      cy.visit('https://demo.applitools.com/hackathon.html');
      cy.get('.logo-w').should('be.visible');
      cy.get('.auth-header').should('contain','Login Form');
    })
    it('Icons are visible', function() {
      cy.get(':nth-child(1) > .pre-icon').should('be.visible');
      cy.get(':nth-child(2) > .pre-icon').should('be.visible');
    })
    it('Username and Password lebels are visible', function() {
      cy.get(':nth-child(1) > label').should('contain','Username');
      cy.get('form > :nth-child(2) > label').should('contain','Password');
    })
    it('Username,Password fields and login button are visible', function() {
      cy.get('#username').should('be.visible');
      cy.get('#password').should('be.visible');
      cy.get('#log-in').should('be.visible');
    })
    it('Remember me visible', function() {
      cy.get('.form-check-input').should('be.visible');
    })
    it('Footers icons are visible', function() {
      cy.get('[style="display: inline-block; margin-bottom:4px;"] > img').should('be.visible');
      cy.get(':nth-child(2) > img').should('be.visible');
      cy.get(':nth-child(3) > img').should('be.visible');
    })
  })
  describe('Data-Driven Test', function() {
    it('dont enter username and password and try to login', function() {
     
      cy.get('#log-in').click();
      cy.contains('Both Username and Password must be present').should('be.visible');
    })
    it('dont enter password and try to login', function() {
  
      cy.get('#username').type('admin');
      cy.get('#log-in').click();
      cy.contains('Password must be present').should('be.visible');
    })
    it('dont enter username and try to login', function() {

      cy.get('#username').clear();
      cy.get('#password').type('admin');
      cy.get('#log-in').click();
      cy.contains('Username must be present').should('be.visible');
    })
    it('positive case:enter both and login', function() {
      cy.get('#username').type('admin');
      cy.get('#password').type('admin');
      cy.get('#log-in').click();
      cy.get('.top-menu-controls > .logged-user-w > .logged-user-i > .avatar-w > img').should('be.visible');

    })
  })
    describe('Table Sort Test', function() {
    it('Table Sort Test', function() {
      cy.get('#amount').click();
      //validation is very critical and going to be huge line of code and complex by conventional way
      //and nearly impossible in these type cases
    
    })
  })
  describe('Canvas Chart Test', function() {
    it('to check 2017 and 2018 canvas', function() {
    //
      cy.get('#showExpensesChart').click();
      cy.get('#canvas').should('be.visible');
    })
    it('to check 2017,2018 and 2019 canvas', function() {
      //
      cy.get('#addDataset').click();
      cy.get('#canvas').should('be.visible'); 
      //here it is really not possible to validate this canvas in detail by conventioanl automation testing
      

    })
  })
  describe('Dynamic Content Test', function(){
    it('Flashsale visibility', function() {
      cy.visit('https://demo.applitools.com/hackathon.html?showAd=true'); 
      cy.get('#flashSale > img').should('be.visible');
      cy.get('#flashSale2 > img').should('be.visible');
      //here also its not possible to validate the dynamic natur of this gifs
      //by conventional automation testing
    })
  })
