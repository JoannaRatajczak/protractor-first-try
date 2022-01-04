exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
      'browserName': 'chrome'
    },
    plugins: [{
      package: 'query-selector-shadow-dom/plugins/protractor'
    }],
    specs: ['button/button.item.spec.js'], 
    allScriptsTimeout: 500000
  }