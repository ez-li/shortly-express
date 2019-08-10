const parseCookies = (req, res, next) => {
  var newObj = {}
  if (req.headers.cookie){
    var cookiesArr = req.headers.cookie.split('; ');

    cookiesArr.map(function (cookie) {
      var reqSplit= cookie.split('=')
      newObj[reqSplit[0]] = reqSplit[1]
    })
    req.cookies = newObj;
  }
  next();
};

module.exports = parseCookies;