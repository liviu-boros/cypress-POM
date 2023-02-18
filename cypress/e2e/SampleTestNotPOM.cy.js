import User from "../actions/Actions"

describe('Job Applicaton Form', () => {

  beforeEach(() => {

    cy.visit('job-application-form/')
    cy.wait(300)
  })

  it('All fields can be filled', () => {

    User
      .findsTextField('First Name').typesText('testFirst Name')
      .findsTextField('Last Name').typesText('TestNameTwo')
      .findsTextField('Email').typesText('testEmail@test.test')
      .findsTextField('Address Line 1').typesText('testAddres')
      .findsTextField('City').typesText('testCity')
      .findsTextField('Zip Code').typesText('TESTZIP')
      .findsDropdownField('Country').selectsOption('Romania')
      .findsQuestion('How familiar are you with WordPress?').selectsAnswer('Eat, Sleep, WordPress, Repeat')
      .findsQuestion('Have you ever developed a WordPress theme before?').selectsAnswer('Yes')
      .findsQuestion('Have you previously worked as a support engineer?').selectsAnswer('No')
  })

  it('All mandatory fields are highlighted', () => {

    User
      .findsButton('Next').clicks()
      .findsTextField('Email').expectsWarningMessage('This field is required')
      .findsQuestion('How familiar are you with WordPress?').expectsWarningMessage('This field is required')
      .findsQuestion('Have you ever developed a WordPress theme before?').expectsWarningMessage('This field is required')
      .findsQuestion('Have you previously worked as a support engineer?').expectsWarningMessage('This field is required')
      .findsTextField('Email').typesText('testEmail@test.test')
      .findsQuestion('How familiar are you with WordPress?').selectsAnswer('Eat, Sleep, WordPress, Repeat')
      .findsQuestion('Have you ever developed a WordPress theme before?').selectsAnswer('Yes')
      .findsQuestion('Have you previously worked as a support engineer?').selectsAnswer('No')
      .findsTextField('Email').expectsNoWarningMessage()
      .findsQuestion('How familiar are you with WordPress?').expectsNoWarningMessage()
      .findsQuestion('Have you ever developed a WordPress theme before?').expectsNoWarningMessage()
      .findsQuestion('Have you previously worked as a support engineer?').expectsNoWarningMessage()
  })
})

describe('Contact Form', () => {

  beforeEach(() => {

    cy.visit('contact-form-demo/')
    cy.wait(300)
  })

  it('All fields can be filled', () => {

    User
      .findsTextField('First Name').typesText('testFirst Name')
      .findsTextField('Last Name').typesText('TestNameTwo')
      .findsTextField('Email').typesText('testEmail@test.test')
      .findsTextField('Subject').typesText('testSubject')
      .findsTextBox('Your Message').typesText('testMessage{Enter}testMessage2{Enter}testMessage3')
  })

  it('All mandatory fields are highlighted', () => {
    User
      .findsButton('Submit Form').clicks()
      .findsTextField('Email').expectsWarningMessage('This field is required')
      .findsTextBox('Your Message').expectsWarningMessage('This field is required')
      .findsTextField('Email').typesText('testEmail@test.test')
      .findsTextBox('Your Message').typesText('testMessage')
      .findsTextField('First Name').clicks()
      .findsTextField('Email').expectsNoWarningMessage()
      .findsTextBox('Your Message').expectsNoWarningMessage()
  })
})