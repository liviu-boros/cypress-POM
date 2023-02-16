class UserActions {

  // Anchors
  //
  findsTextField(label) {
    this.locator = cy.contains(label).parent().siblings().find('input')
    return this
  }
  findsTextBox(label) {
    this.locator = cy.contains(label).parent().siblings().find('textarea')
    return this
  }
  findsDropdownField(label) {
    this.locator = cy.contains(label).parent().siblings().find('select')
    return this
  }
  findsQuestion(label) {
    this.locator = cy.contains(label).parent().siblings()
    return this
  }
  findsButton(label) {
    this.locator = cy.contains('button', `${label}`)
    return this
  }

  // Actions
  //
  typesText(inputText) {
    this.locator.type(inputText)
    return this
  }
  clicks() {
    this.locator.click()
    return this
  }
  selectsOption(option) {
    this.locator.select(option)
    return this
  }
  selectsAnswer(option) {
    this.locator.contains(option).find('input[type="checkbox"]').click({ force: true })
    return this
  }
  expectsWarningMessage(warningText) {
    this.locator.parent().contains('.error', warningText).should('be.visible')
    return this
  }
  expectsNoWarningMessage() {
    this.locator.parent().contains('.error').should('not.exist')
    return this
  }

}
export default new UserActions()