# Introduction

This project is aimed at exploring the page object model and alternatives for Cypress.

# Generalized User Actions

The alternative pattern we are comparing to POM is based on generalized user actions. In this pattern, we define a set of user actions that can be applied to any component on any page implemented as methods that perform actions, such as type, click, and select. These methods use anchors and traversal methods to locate elements dynamically by any text directly visible to the user, like a label or a placeholder. This makes the tests more resilient to changes in the UI, as they do not rely on hard-coded selectors, but on visible data that is also verified on each action performed.

# Tests

The tests in this project are designed to fill out and submit two demo forms and verify that all mandatory fields show warning messages. The tests have been implemented using both the Page Object Model and the alternative pattern.

# Implementation

For the Page Object Model, two Page Objects: SampleTestPom and JobApplicationFormPOM. Both encapsulate the state and behavior of the respective forms.

For the alternative pattern an Actions class with all user actions needed to run the same tests.

# Test Steps

The Actions class has an easily readable syntax for defining test steps, which can make test cases more understandable. In the example provided, the test steps for filling out the forms are written in a clear and concise manner.

```javascript
User.findsTextField('First Name').typesText('testFirst Name')
User.findsDropdownField('Country').selectsOption('Romania')
User.findsQuestion('Have you ever developed a WordPress theme before?').selectsAnswer('Yes')

User.findsTextField('Email').expectsWarningMessage('This field is required')
User.findsQuestion('How familiar are you with WordPress?').expectsNoWarningMessage()
```

Each step begins with a method that identifies the type of field being interacted with, such as a text field, dropdown field, or a question. The `findsTextField()`, `findsDropdownField()`, and `findsQuestion()` methods are used to locate the element on the page dynamically, by label in case of the first two and by section header for the question and answers. After the field is located, the relevant action is performed.

Overall, this syntax makes it easy to follow what actions are being performed on which elements and also convert manual tests steps that usually rely on a label or header for identifying elements. It enables easy modification of test steps if changes are made to the UI, as the tests rely only on data visible tot the user
