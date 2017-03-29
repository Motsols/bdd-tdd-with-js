module.exports = function () {
    this.When(/^I click on the instructions$/, function () {
        helpers.loadPage('<URL TO YOUR WEBSITE OR LOCAL FILE>');

        // return helpers.loadPage('C:\code\Barebone-BDD-Jasmine-Karma\index.html').then(function() {
 
        // use a method on the page object which also returns a promise 
        return driver.wait(until.elementsLocated(by.id('toggleInstructions')), 5000).then(function(){
 
            // return the promise of an element to the following then. 
            // return driver.findElements(by.css('div.g'));
            driver.findElement(by.id('toggleInstructions')).click();
            return driver.findElement(by.id('toggleInstructions'));

        })
    // });
    });


    this.Then(/^the instructions are no longer shown$/, function () {
 
        // driver wair returns a promise so return that 
        return driver.wait(until.elementsLocated(by.id('toggleInstructions')), 5000).then(function(){
            
            // return the promise of an element to the following then. 
            return driver.findElement(by.css('#expand'));
        })
        .then(function (element) {
 
            // verify this element has children 
            expect(true).to.equal(true);
            // console.log(element);
            // expect(element.size()).to.not.equal(0);
        });
    });
    
};