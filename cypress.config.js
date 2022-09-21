const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gybd1o',
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
