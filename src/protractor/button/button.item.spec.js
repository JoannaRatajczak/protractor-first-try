describe('Protractor exercise', function() {

    beforeEach(function() {
      browser.waitForAngularEnabled(false);
      browser.get('https://vitoguide.viessmann.com/');
      browser.waitForAngular(false);
      global.EC = protractor.ExpectedConditions;
      var parent = element(by.id('usercentrics-root'));
      var accCookiesButton = parent.element(by.shadowDomCss('#uc-center-container > div.sc-jcVcSv.efERae > div > div > div > button.sc-gsTEea.bmRzZM'));
      accCookiesButton.click();
    });
  
    it('After choosing "Try the demo" should route to the new event page', function() {
        var tryDemoButton = element(by.id('gtm_run-demo-btn'));
        browser.wait(EC.presenceOf(tryDemoButton, 5000));
        tryDemoButton.click();
        browser.sleep(1000)
        expect(browser.getCurrentUrl()).toMatch('installations');
      });
  });