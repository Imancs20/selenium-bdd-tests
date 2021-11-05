const { After, setWorldConstructor } = require("@cucumber/cucumber");
const { setupDriver } = require("./selenium");

class CustomWorld {
  constructor() {
    this.driver = setupDriver();
    console.log("World is initiated");
  }
}

After({ tags: "@CLEANUP" }, async function (scenario) {
  // console.log("After scenario", scenario);
  if (this.driver) {
    await this.driver.quit();
  }
});

setWorldConstructor(CustomWorld);