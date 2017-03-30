# BDD and TDD with javascript
## Your work
Implement the calculator in index.html step by step utilizing BDD and TDD.

## Getting started

Install packages
`npm install`

Install karma cli:  
`npm install -g karma-cli`

Start karma server locally (this runs js unit tests (specs):  
`karma start`  
(Karma is now running automatically when you make changes that)

To get BDD running, update features/step-definitions/instructions-steps.js:4 with the correct URL to your local index.html.

Run BDD tests with  
`node ./node_modules/selenium-cucumber-js/index.js -r ./features/reports -s ./features/step-definitions`

## Docs for the details

### BDD tools
Gherkin (the "normal" language)  
https://cucumber.io/docs/reference  

Cucumber (the tool to automate gherkin features to the step definitions)  
https://cucumber.io/docs  

Selenium Webdriver (telling the browser how and what to do)  
http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html  


### TDD tools
Jasmine (for the specs)  
https://jasmine.github.io/index.html  

Karma (the test runner, very nice tool to have)  
http://karma-runner.github.io/1.0/index.html  



