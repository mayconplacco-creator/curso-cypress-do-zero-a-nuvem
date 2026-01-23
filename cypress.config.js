const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "spi8wd",

  e2e: {
    specPattern: "cypress/e2e/**/*.cy.js",
    supportFile: "cypress/support/e2e.js",
  },
});
