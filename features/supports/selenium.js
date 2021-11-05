const os = require('os');
const seleniumWebDriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

const chromeDriver = require('chromedriver');
const geckoDriver = require('geckodriver');


let driver = null;


function setupDriver() {
  if (driver) {
    // theWorld.setSeleniumDriver(driver);
    return driver;
  }
  let option = null;
  // console.log('theWorld', theWorld);
  switch (process.env.BROWSER) {
    case 'chrome':
      chrome.setDefaultService(
        new chrome.ServiceBuilder(chromeDriver.path).build()
      );
      option = new chrome.Options();
      if (!process.env.GUI) {
        option.headless();
      }
      if (os.platform() === "linux") {
        // option.addArguments("test-type");
        // option.addArguments("start-maximized");
        // option.addArguments("--js-flags=--expose-gc");
        // option.addArguments("--enable-precise-memory-info");
        // option.addArguments("--disable-popup-blocking");
        // option.addArguments("--disable-default-apps");
        // option.addArguments("--disable-infobars");
      }
      driver = new seleniumWebDriver
        .Builder()
        .forBrowser("chrome")
        .withCapabilities(seleniumWebDriver.Capabilities.chrome())
        .setChromeOptions(option)
        .build();

      break;
    default: // firefox
      option = new firefox.Options();
      if (!process.env.GUI) {
        option.headless();
      }
      driver = new seleniumWebDriver
        .Builder()
        .forBrowser("firefox")
        .withCapabilities(seleniumWebDriver.Capabilities.firefox())
        .setFirefoxService(
          new firefox.ServiceBuilder(geckoDriver.path)
        )
        .setFirefoxOptions(option)
        .build();
      break;
  }
  // theWorld.setSeleniumDriver(driver);
  // console.log(theWorld.driver);
  return driver;
}

module.exports = { setupDriver };