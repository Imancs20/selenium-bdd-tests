const { Given, When, Then } = require('@cucumber/cucumber');
const { By, Key, until } = require('selenium-webdriver');
const { asyncWait } = require('../supports/helpers');
const expect = require('chai').expect;

Given('When I open browser and go to www.google.com', async function () {
  await this.driver.get("https://www.google.co.th");
});

When('Website is loaded and input[name=q] is loaded', async function () {
  await this.driver.wait(until.elementLocated(By.css("input[name=q]"))); // By.xpath
});

Then('I search for {string}', async function (searchString) {
  const element = await this.driver.findElement(By.css("input[name=q]"));
  await element.sendKeys(searchString, Key.ENTER);
  // await asyncWait(1);
});

Given('Find github website on search result', function () {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
});

When('Search results loaded with search {string}', async function (searchString) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';

  // async/await + promise
  // await this.driver.takeScreenshot().then(
  //   function (image, err) {
  //     require('fs').writeFile('out.png', image, 'base64', function (err) {
  //       console.log(err);
  //     });
  //   }
  // );

  // const image = await this.driver.takeScreenshot();
  // require('fs').writeFile('out.png', image, 'base64', function (err) {
  //   console.log(err);
  // });

  await this.driver.wait(
    until.elementLocated(
      By.xpath(`//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input`)
    ),
  );
  const element = await this.driver.findElement(By.xpath(`//*[@id="tsf"]/div[1]/div[1]/div[2]/div/div[2]/input`));

  // console.log('*****', await element.getAttribute('value'));
  const foundText = await element.getAttribute('value');
  expect(foundText).to.equal(searchString);
});

Then('the first link must be {string}', async function (searchWord) {
  // Write code here that turns the phrase above into concrete actions
  // return 'pending';
  const element = await this.driver.findElement(By.xpath(`/html/body/div[7]/div/div[9]/div[1]/div/div[2]/div[2]/div/div/div[1]/div/div/div/div/div/div/div[1]/a`));
  const url = await element.getAttribute("href");
  console.log(url);
  // expect(url).equal("https://github.com");
  expect(url).to.contain.oneOf(['https://github.com'])
});
