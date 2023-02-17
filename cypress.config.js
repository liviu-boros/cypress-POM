const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://fluentforms.com/forms/",
    viewportWidth: 1000,
    viewportHeight: 900,
    scrollBehavior: "nearest",
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
