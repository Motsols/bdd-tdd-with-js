# README

Install karma cli:  
`npm install -g karma-cli`

start karma server locally (this runs js unit tests (specs):  
`karma start`  
(Karma is now running automatically when you make changes that)

To get BDD runnint, update features/step-definitions/instructions-steps.js:4 with the correct URL to your local index.html.

Run BDD tests with  
`node ./node_modules/selenium-cucumber-js/index.js -r ./features/reports -s ./features/step-definitions`

