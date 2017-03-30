# BDD and TDD with javascript


## Getting started
Install packages  
`npm install`

Install karma cli:  
`npm install -g karma-cli` (Windows)
`sudo npm install -g karma-cli` (Mac/Linux)


Start karma server locally (this runs js unit tests (specs):  
`karma start`  
(Karma is now running automatically when you make changes that)
[To change the browser karma uses, click here](http://karma-runner.github.io/1.0/config/browsers.html)

To get BDD running, **update the URL** in features/step-definitions/instructions-steps.js:4 with the correct URL to your local index.html.

Run BDD tests with  
`node ./node_modules/selenium-cucumber-js/index.js -r ./features/reports -s ./features/step-definitions`  
To change the browser to test with, add this command to the line above: `-b [chrome/phantomjs/firefox/safari]`


## Your work
Open index.html to see what you'll be working on.
Implement the calculator step by step utilizing BDD and TDD.

Easy steps to start learning:
 - When you click on number 1, it should be shown in the display
   1. Write a scenario for this in /features/instructions.features
   2. Run the command for the BDD tests (below) to generate step definitions
   3. Add these steps to /features/step-definitions/instructions-steps.js and implement the first one
   4. Add a unit test to /spec/exampleSpec.js and run it with karma start
   5. Implement a testable javascript function and test it with Jasmine (tip: Jasmine SpyOn)
   6. Continue with tdd tests until you have fulfilled the first step in BDD. Then continue with the next step until the scenario is complete. Then write more scenarios (such as the one below) until the calculator is working.
 - When you enter 1+1 and click =, then the number 2 will show in the display
 - And so on


## Recommended books
How to write Gherkin (the text in the .feature files)  
[The cucumber book @ Amazon](https://www.amazon.com/Cucumber-Book-Behaviour-Driven-Development-Programmers/dp/1934356808/ref=sr_1_2?ie=UTF8&qid=1490899325&sr=8-2&keywords=cucumber+bdd)  
[The cucumber book @ Adlibris](http://www.adlibris.com/se/bok/the-cucumber-book-behaviour-driven-development-for-testers-and-developers-9781680502381)  


## Docs for the details

### BDD tools
Gherkin (the "normal" language)  
https://cucumber.io/docs/reference  

Cucumber (the tool to automate gherkin features to the step definitions)  
https://cucumber.io/docs  

Cucumber-selenium-js (the tools to run the tests)  
https://www.npmjs.com/package/selenium-cucumber-js 

Selenium Webdriver (telling the browser how and what to do)  
http://seleniumhq.github.io/selenium/docs/api/javascript/module/selenium-webdriver/lib/webdriver_exports_WebDriver.html  


### TDD tools
Jasmine (for the specs)  
https://jasmine.github.io/index.html  

Karma (the test runner, very nice tool to have)  
http://karma-runner.github.io/1.0/index.html  



