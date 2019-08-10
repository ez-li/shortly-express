const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // console.log(req)
  // check if user has logged in before, if there's cookies
  // if not, then create a new session with a new cookie
  var val =  models.Sessions.isLoggedIn(req)
  if (!val) {
    models.Sessions.create()
      .then(function(data){
        var x = models.Sessions.get(data)
      })
  }
    // .then(function(bool) {
    //   console.log(bool)
    //   if (!bool) {
    //     console.log(models.Sessions.create());

    //   }
    // })
  // models.Sessions.create
  // req.session = {}
  // req.session.hash = 'nothing';
  // res.cookies = {};
  // res.cookies.shortlyid = { value:'something'}
  next()
};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

