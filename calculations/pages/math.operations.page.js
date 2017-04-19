module.exports = function(){
	this.resultValue = element(by.id('cwos'));
	
	this.ClickButton = function(text){
		var button = element(by.linkedText(text));
		button.click();
	}
	
	this.input = element(by.id('cwtltblr'));
	
	this.enterCharacters = function(text){
		this.input.sendKeys(text);
	}
	
	this.clickEnter = function(){
		ptor.actions().sendKeys(protractor.Key.ENTER).perform();
	}
	
	//this.radianButton = element(by.css('div[class='cwsbc-c cwbd']'));
	this.radianButton = element.all(by.className('cwsbc-c cwbd')).first();
	
	this.clickRadianButton = function(){
		this.radianButton.click();
	}
		
	//this.resultValue = element(by.css('span[id='cwos']'));
    this.resultValue = element(by.id('cwos'));
  
    this.getResultValue = function(){
	  return this.resultValue.getText();
 }
}

 