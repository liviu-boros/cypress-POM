import ContactFormPage from "../pages/ContactFormPOM"
import JobApplicationFormPage from "../pages/JobApplicationFormPOM"

describe('Job Applicaton Form', () => {

  beforeEach(() => {

    cy.visit('job-application-form/')
  })

  it('All fields can be filled', () => {

    JobApplicationFormPage.typeFirstName('testName')
    JobApplicationFormPage.typeLastName('TestNameTwo')
    JobApplicationFormPage.typeEmail('testEmail@test.test')
    JobApplicationFormPage.typeAddress('testAddres')
    JobApplicationFormPage.typeCity('testCity')
    JobApplicationFormPage.typeZipCode('TESTZIP')
    JobApplicationFormPage.selectCountry('Romania')
    JobApplicationFormPage.tickQuestion1Answer3()
    JobApplicationFormPage.tickQuestion2Answer1()
    JobApplicationFormPage.tickQuestion3Answer2()
    JobApplicationFormPage.clickNext()
  })

  it('All mandatory fields are highlighted', () => {

    JobApplicationFormPage.typeEmail('{Enter}')
    JobApplicationFormPage.clickNext()
    JobApplicationFormPage.verifyEmailIsHighlighted()
    JobApplicationFormPage.typeEmail('testEmail@test.test')
    JobApplicationFormPage.clickNext()
    JobApplicationFormPage.verifyEmailIsNotHighlighted()

    JobApplicationFormPage.verifyFirstQuestionIsHighlighted()
    JobApplicationFormPage.tickQuestion1Answer1()
    JobApplicationFormPage.verifyFirstQuestionIsNotHighlighted()

    JobApplicationFormPage.verifySecondQuestionIsHighlighted()
    JobApplicationFormPage.tickQuestion2Answer1()
    JobApplicationFormPage.verifySecondQuestionIsNotHighlighted()

    JobApplicationFormPage.verifyThirdQuestionIsHighlighted()
    JobApplicationFormPage.tickQuestion3Answer2()
    JobApplicationFormPage.verifyThirdQuestionIsNotHighlighted()
  })
})

describe('Contact Form', () => {

  beforeEach(() => {

    cy.visit('contact-form-demo/')
  })

  it('All fields can be filled', () => {

    ContactFormPage.typeFirstName('testName')
    ContactFormPage.typeLastName('TestNameTwo')
    ContactFormPage.typeEmail('testEmail@test.test')
    ContactFormPage.typeSubject('testSubject')
    ContactFormPage.typeMessage('testMessage{Enter}testMessage2{Enter}testMessage3')
  })

  it('All mandatory fields are highlighted', () => {

    ContactFormPage.typeEmail('{Enter}')
    ContactFormPage.clickSubmitForm()
    ContactFormPage.verifyEmailIsHighlighted()
    ContactFormPage.typeEmail('testEmail@test.test')
    ContactFormPage.typeFirstName('{enter}')
    ContactFormPage.verifyEmailIsNotHighlighted()

    ContactFormPage.verifyMessageIsHighlighted()
    ContactFormPage.typeMessage('testMessage')
    ContactFormPage.typeFirstName('{enter}')
    ContactFormPage.verifyyMessageIsNotHighlighted()
  })
})