Feature: Instructions section
    In order to show how bdd testing works
    we will be able to show and hide the instructions

# Feature statement above is only to explain the purpose of the scenarios in this file.

# Add another scenario and run the selenium tool documented on github to autogenerate the steps which you then will place in /step-definitions/instructions-steps.js

#"Scenario: a name" is only a name for the test scenario and should be unique.
# All lines in this scenario need to start with one of these:
## Given - example: Given I am on the start page
## When - example: When I click on something
## Then - example: Then my order is placed
## And - this will only work if Given, When, Then has already been. Optional to use, only for semantic purpose
## For all the details on Gherkin read here https://cucumber.io/docs/reference



Scenario: Hide the instructions
    When I click on the instructions
    Then I write "gakjl"
    Then the instructions are no longer shown


