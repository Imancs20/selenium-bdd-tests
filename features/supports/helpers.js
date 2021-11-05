async function asyncWait(secs) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, secs * 1000);
  });
}

module.exports = {
  asyncWait
};