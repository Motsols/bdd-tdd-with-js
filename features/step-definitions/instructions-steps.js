module.exports = function () {

    this.When(/^I click on the instructions$/, function () {
        helpers.loadPage('C:/code/bdd-tdd-with-js/index.html');
        // use a method on the page object which also returns a promise 
        return driver.wait(until.elementsLocated(by.id('toggleInstructions')), 5000).then(function(){
 
            // return the promise of an element to the following then. 
            driver.findElement(by.id('toggleInstructions')).click();
            return driver.findElement(by.id('toggleInstructions'));
        })
    });

    this.Then(/^the instructions are no longer shown$/, function () {
        // driver wair returns a promise so return that 
        return driver.wait(until.elementsLocated(by.id('expand')), 5000)
        .then(function () {

            //div no longer shown
            driver.findElement(by.id('instructions')).getAttribute("style")
            .then(function(e){
                expect(e).to.equal('display: none;');
            });

            //how to check if it contains text
            driver.findElement(by.id('display')).getAttribute("innerHTML")
            .then(function(e){
                expect(e).to.equal('');
            });
        });
    });

    this.When(/^I write "([^"]*)"$/, function (arg1, callback) {
         // Write code here that turns the phrase above into concrete actions
         //Just to show how to use inparameters.
         // arg1 = the text to write.
         //find the text field and use a function 'send keys' or similar to enter the value arg1
        callback();
       });
};