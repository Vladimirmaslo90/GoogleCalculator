var GoogleControls = require('./pages/google.controls.page.js'),
	MathControls = require('./pages/math.operations.page.js');
    

describe('Objects', function(){
  var googleControl = new GoogleControls(),
	  mathControls = new MathControls();
	    
  beforeEach(function(){
	  browser.ignoreSynchronization = true;
      browser.get('https://google.com');
	  browser.driver.sleep(1000);
	  googleControl.mainSearch('гугл калькулятор'); //
	  browser.driver.sleep(1000);
  });

  //positive tests
  
  describe('90 degree sine (in degries))', function(){
    it('Result should be 1', function(){
    mathControls.clickRadianButton(); //changing from rad to deg
	mathControls.enterCharacters('s90');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('1');
	     
    });
 });
 
 describe('Factorial of 10', function(){
    it('Result should be 1', function(){
    mathControls.enterCharacters('10!');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('3628800');
	     
    });
 });
   
  describe('When 5 multiply 5', function(){
    it('Result should be 25', function(){
    mathControls.enterCharacters('5*5');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('25');
	
      
    });
 });
      
 describe('When calculation fractional numbers', function(){
    it('Result should be computed correctly', function(){
    mathControls.enterCharacters('5.5*5.5');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('30.25');
	     
    });
 });
 
 describe('When multiply two negative numbers', function(){
    it('Result should be positive', function(){
    mathControls.enterCharacters('-600*-650');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('390000');
	     
    });
 });
 
 describe('When using Ans from previous calculation', function(){
    it('Previous result should be correctly used and computed', function(){
    mathControls.enterCharacters('900/3');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	browser.driver.sleep(1000);
	mathControls.enterCharacters('700+a');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('1000');
	     
    });
 });
 
    //negative tests
	
 describe('When divide by zero', function(){
    it('Result should be Infinity', function(){
    mathControls.enterCharacters('5/0');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('Infinity');
	     
    });
 });
 
 describe('Root of 55 degree to zero from infinity', function(){
    it('An error should be displayed', function(){
    mathControls.enterCharacters('5/0');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	mathControls.input.sendKeys(protractor.Key.BACK_SPACE);
	browser.driver.sleep(1000);
	mathControls.enterCharacters('r55a');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('Error');
    });
 });
 
 describe('Dividing negative zeros', function(){
    it('An error should be displayed', function(){
    mathControls.enterCharacters('-0/-0');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('Error');
    });
 });
 
  describe('Taking logarithm from negative', function(){
    it('An error should be displayed', function(){
    mathControls.enterCharacters('g-99');
	mathControls.input.sendKeys(protractor.Key.ENTER);
	var result = googleControl.getResultValue();
	browser.driver.sleep(1000);
	expect(result).toMatch('Error');
    });
 });

 
 
 });
 // Test to be included to another test suite, due the beforeeach conflicts with test (another way of entering calculated data(from URL))
 // describe('When enter calculation throw URL', function(){
    // it('Calculator with computed value should be displayed', function(){
	// browser.ignoreSynchronization = true;
    // browser.get('https://google.com');
	// googleControl.mainSearch('100 * 25 - 3 / 4'); 
	// googleControl.clickMagnifyingGlass();
	// var result = googleControl.getResultValue();
	// expect(result).toMatch('2499.25');
	
    // });
  // });

 



