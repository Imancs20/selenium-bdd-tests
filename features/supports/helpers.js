async function asyncWait(secs) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, secs * 1000);
  });
}

async function loginUsingLine() {
  // blah
  // blah
}

async function takeScreenshot(driver, fileName) {

}

module.exports = {
  asyncWait,
  loginUsingLine,
  takeScreenshot
};