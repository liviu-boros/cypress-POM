class ContactFormPage {

  // Locators - fields
  // 
  // 
  _firstnameLocator = '#ff_3_names_first_name_'
  _lastnameLocator = '#ff_3_names_last_name_'
  _emailLocator = '#ff_3_email'
  _subjectLocator = '#ff_3_subject'
  _messageLocator = '#ff_3_message'
  _submitFormLocator = 'Submit Form'
  // Locators - warnings
  // 
  // 
  _emailWarningLocator = ':nth-child(6) > .ff-el-input--content > .error'
  _messageWarningLocator = ':nth-child(8) > .ff-el-input--content > .error'

  // Actions
  // 
  // 
  typeFirstName(inputText) {
    cy.get(this._firstnameLocator).clear().type(inputText)
  }
  typeLastName(inputText) {
    cy.get(this._lastnameLocator).clear().type(inputText)
  }
  typeEmail(inputText) {
    cy.get(this._emailLocator).clear().type(inputText)
  }
  typeSubject(inputText) {
    cy.get(this._subjectLocator).clear().type(inputText)
  }
  typeMessage(inputText) {
    cy.get(this._messageLocator).clear().type(inputText)
  }
  clickSubmitForm() {
    cy.get(`button:contains("${this._submitFormLocator}")`).click()
  }

  // Assertions
  // 
  // 
  verifyEmailIsHighlighted() {
    cy.get(this._emailLocator).should('have.attr', 'aria-invalid', 'true')
    cy.get(this._emailWarningLocator).should('be.visible')
  }
  verifyEmailIsNotHighlighted() {
    cy.get(this._emailLocator).should('have.attr', 'aria-invalid', 'false')
    cy.get(this._emailWarningLocator).should('not.exist')
  }
  verifyMessageIsHighlighted() {
    cy.get(this._messageWarningLocator).should('be.visible')
  }
  verifyyMessageIsNotHighlighted() {
    cy.get(this._messageWarningLocator).should('not.exist')
  }

}
export default new ContactFormPage()