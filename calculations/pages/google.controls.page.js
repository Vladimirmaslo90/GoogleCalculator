module.exports = function(){
	this.input = element(by.id('lst-ib'));
	
	this.mainSearch = function(text){
		this.input.sendKeys(text);
	}
	
	this.searchButton = element(by.name('btnK'));
	
	this.clickSearchButton = function(){
		this.searchButton.click();
	}
	
	this.title = element(by.tagName('title'));
	
	this.getTitlevalue = function(){
		return this.title.getText();
	}
	
	this.magnifyingGlass = element(by.name('btnG'));
	
	this.clickMagnifyingGlass = function(){
		
		this.magnifyingGlass.click();
	}
	
	this.mainLogo = element(by.id('logocont'));
	
	this.resultValue = element(by.id('cwos'));
  
  this.getResultValue = function(){
	  return this.resultValue.getText();
  }
}
	
	
	
  // this.name = element(by.model('item.name'));
    

  // this.button = element(by.buttonText('Create'));

  // this.getButtonClasses = function(){
    // return this.button.getAttribute('class');
  // }

  // this.setName = function(name){
    // this.name.sendKeys(name);
  // }

  // this.saveData = function(){
    // this.button.click();
  // }
// }
