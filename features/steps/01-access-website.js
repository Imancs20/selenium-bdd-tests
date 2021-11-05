const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { asyncWait } = require('../supports/helpers');

Given('When I open browser and go to www.google.com', async function () {
  await this.driver.get("https://www.google.co.th");
});

When('Website is loaded and input[name=q] is loaded', async function () {
  await this.driver.wait(until.elementLocated(By.css("input[name=q]")));
});

Then('I search for {string}', async function (searchString) {
  const element = await this.driver.findElement(By.css("input[name=q]"));
  element.sendKeys(searchString, Key.ENTER);
  await asyncWait(3);
});

Given('Find github website on search result', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

When('Search results loaded', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

Then('the first link must be {string}', function (searchWord) {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});
