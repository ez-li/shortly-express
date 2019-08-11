const models = require('../models');
const Promise = require('bluebird');

module.exports.createSession = (req, res, next) => {
  // console.log(req)
  // check if user has logged in before, if there's cookies
  // if not, then create a new session with a new cookiesa
  // var val = models.Sessions.isLoggedIn(req.session)
  console.log('ONE: TO CREATE COOKIE 0 ')
  if(req.method === 'POST'){
    if (Object.keys(req.cookies).length !== 0) {
      console.log('ONE: TO CREATE COOKIE 1')
    req.session = {};
    req.session.hash = req.cookies.shortlyid;
    models.Sessions.get(req.session)
      .then((data) => {
        console.log('ONE: TO CREATE COOKIE A')
      if (data.user){
          //console.log(data)
          req.session.user = {username: data.user.username}
          req.session.userId = data.user.id
      }
        // console.log(data.user.username)
        next()
      })
      .catch((err)=> {
        console.log('ONE: TO CREATE COOKIE B')
        models.Sessions.create()
        .then(function(data){
          req.session = {};
          req.session.hash = data;
          res.cookies = {};
          res.cookies.shortlyid = {value: data};
          //console.log(data, "this is our data")
          next()
        })
      })
    } else {
      console.log('ONE: TO CREATE COOKIE C')
     models.Sessions.create()
      .then(function(data){
        req.session = {};
        req.session.hash = data;
        res.cookies = {};
        res.cookies.shortlyid = {value: data};
        next()
      })
    }

  } else {
    console.log('ONE: TO CREATE COOKIE D')
   models.Sessions.create()
    .then(function(data){
      req.session = {};
      req.session.hash = data;
      res.cookies = {};
      res.cookies.shortlyid = {value: data};
      next()
    })
  }
  next()

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/


// function jar that returns cookies when called

module.exports.jar() => {
  models.Sessions.getAll().length;
}