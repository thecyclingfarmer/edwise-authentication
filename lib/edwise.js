'use strict';
var superagent = require('superagent');
var agent = superagent.agent();
var TARGET = 'https://www.edwise.se/NewLoginPage.aspx/GetActionIdpTarget';
var ACTIONTARGET = 'https://services.rexnet.se/Login/PostAuthenticate.aspx?idpmethod=xad&domain=DefaultDomain&idptarget=https%3A%2F%2Fwww.edwise.se%2FSecure%2Fdefault.aspx';

/**
 * @constructor
 * @param {Object} options Options object
 */
function Edwise(options) {
  this.options = options || {};
}

Edwise.prototype = {

  createAction: function () {
    return new Promise(function (resolve, reject) {
      agent.post(TARGET)
        .send({"userName": this.options.username, "actionTarget": ACTIONTARGET})
        .set('Accept', 'application/json')
        .end(function(err, res){
          if (err || !res.ok) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      }.bind(this));
  },

  authenticate: function (res) {
    return new Promise(function (resolve, reject) {
      agent.post(res.body.d)
        .send({"username": this.options.username, "password": this.options.password})
        .set('Accept', 'text/html')
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .end(function (err, res) {
          if (err || !res.ok) {
            reject(err);
          } else {
            resolve(res);
          }
        });
      }.bind(this));
  },

  login: function () {
    return this.createAction(this.options.username)
      .then(function (res) {
        return this.authenticate(res);
      }.bind(this))
      .catch(function (err) {
        console.log(err);
      });
  }
}

exports.createConnection = function(options) {
    return new Edwise(options);
}
