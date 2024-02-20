const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pr2fm1',

  reporter: 'cypress-mochawesome-reporter',
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    testIsolation:false,
  },
  
});
