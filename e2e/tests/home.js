/**
 * Basic E2E Test for home page
 */

module.exports = {
  'Loads page with title': (browser) => {

     const home = browser.page.home()

     home
      .navigate()
      .waitForElementVisible('body', 1000)
      .assert.containsText('@title', 'Hello, World!')
    
    browser.end()
  }
}
