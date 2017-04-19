var GoogleControls = require('./pages/google.controls.page.js');
    

describe('Objects', function(){
  var googleControl = new GoogleControls();

  beforeEach(function(){
	  browser.ignoreSynchronization = true;
      browser.get('https://google.com');
	  browser.driver.sleep(1000);
	  googleControl.mainSearch('гугл калькулятор'); 
	  browser.driver.sleep(2000);
	});

  describe('When the page was loaded', function(){
    it('Title should be available', function(){
	browser.driver.sleep(2000);
      var title = browser.driver.getTitle();
	  browser.driver.sleep(2000);
      expect(title).toContain('гугл калькулятор');
    });
  });
  
  
  describe('When the page was loaded', function(){
    it('Main logo should be displayed', function(){
    browser.driver.sleep(2000);
	var logo = googleControl.mainLogo;
	expect(browser.isElementPresent(logo)).toBe(true);
      
    });
 });
   

  describe('When the page was loaded', function(){
    it('Default value for result should be 0', function(){
    browser.driver.sleep(2000);
	var result = googleControl.getResultValue();
	browser.driver.sleep(2000);
	expect(result).toMatch('0');
      
    });

});
});
