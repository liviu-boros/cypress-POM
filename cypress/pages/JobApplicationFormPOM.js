class JobApplicationFormPage {

  // Locators - fields
  // 
  _firstnameLocator = '#ff_153_names_first_name_'
  _lastnameLocator = '#ff_153_names_last_name_'
  _emailLocator = '#ff_153_email'
  _countryLocator = '#ff_153_address_1_country_'
  _addressLocator = '#ff_153_address_1_address_line_1_'
  _cityLocator = '#ff_153_address_1_city_'
  _zipCodeLocator = '#ff_153_address_1_zip_'
  _question1Answer1Locator = '[id^="checkbox_"]:nth(0)'
  _question1Answer2Locator = '[id^="checkbox_"]:nth(1)'
  _question1Answer3Locator = '[id^="checkbox_"]:nth(2)'
  _question2Answer1Locator = '[id^="checkbox_"]:nth(3)'
  _question2Answer2Locator = '[id^="checkbox_"]:nth(4)'
  _question3Answer1Locator = '[id^="checkbox_"]:nth(5)'
  _question3Answer2Locator = '[id^="checkbox_"]:nth(6)'
  _nextLocator = 'Next'
  // Locators - warnings
  // 
  _emailWarningLocator = ':nth-child(2) > .ff-el-input--content > .error'
  _question1WarningLocator = ':nth-child(4) > .ff-el-input--content > .error'
  _question2WarningLocator = ':nth-child(5) > .ff-el-input--content > .error'
  _question3WarningLocator = ':nth-child(6) > .ff-el-input--content > .error'

  // Actions
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
  selectCountry(option) {
    cy.get(this._countryLocator).select(option)
  }
  typeAddress(inputText) {
    cy.get(this._addressLocator).clear().type(inputText)
  }
  typeCity(inputText) {
    cy.get(this._cityLocator).clear().type(inputText)
  }
  typeZipCode(inputText) {
    cy.get(this._zipCodeLocator).clear().type(inputText)
  }
  tickQuestion1Answer1() {
    cy.get(this._question1Answer1Locator).click()
  }
  tickQuestion1Answer2() {
    cy.get(this._question1Answer2Locator).click()
  }
  tickQuestion1Answer3() {
    cy.get(this._question1Answer3Locator).click()
  }
  tickQuestion2Answer1() {
    cy.get(this._question2Answer1Locator).click()
  }
  tickQuestion2Answer2() {
    cy.get(this._question2Answer2Locator).click()
  }
  tickQuestion3Answer1() {
    cy.get(this._question3Answer1Locator).click()
  }
  tickQuestion3Answer2() {
    cy.get(this._question3Answer2Locator).click()
  }
  clickNext() {
    cy.get(`button:contains("${this._nextLocator}")`).click({ scrollBehavior: "center" })
  }

  // Assertions
  // 
  verifyEmailIsHighlighted() {
    cy.get(this._emailLocator).should('have.attr', 'aria-invalid', 'true')
    cy.get(this._emailWarningLocator).should('be.visible')
  }
  verifyEmailIsNotHighlighted() {
    cy.get(this._emailLocator).should('have.attr', 'aria-invalid', 'false')
    cy.get(this._emailWarningLocator).should('not.exist')
  }
  verifyFirstQuestionIsHighlighted() {
    cy.get(this._question1WarningLocator).should('be.visible')
  }
  verifyFirstQuestionIsNotHighlighted() {
    cy.get(this._question1WarningLocator).should('not.exist')
  }
  verifySecondQuestionIsHighlighted() {
    cy.get(this._question2WarningLocator).should('be.visible')
  }
  verifySecondQuestionIsNotHighlighted() {
    cy.get(this._question2WarningLocator).should('not.exist')
  }
  verifyThirdQuestionIsHighlighted() {
    cy.get(this._question3WarningLocator).should('be.visible')
  }
  verifyThirdQuestionIsNotHighlighted() {
    cy.get(this._question3WarningLocator).should('not.exist')
  }

}
export default new JobApplicationFormPage()