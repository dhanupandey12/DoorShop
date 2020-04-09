var
  jwt = require('jsonwebtoken'),
  // tokenSecret = "secretissecet";
 jwtSecret = sails.config.secrets.jwtSecret;

// Generates a token from supplied payload
// module.exports.issue = function(payload) {
//   return jwt.sign(
//     payload,
//     tokenSecret // Token Secret that we sign it with
//     // {
//     //   expiresInMinutes : 180 // Token Expire time
//     // }
//   );
// };

module.exports = {
  issue: function (payload) {
    token = jwt.sign(payload, jwtSecret, {expiresIn: 180 * 60})
    // var decode = jwt.decode(token)
    // console.log(decode);
    return token
  },

// Verifies token on a request
// module.exports.verify = function(token, callback) {
//   return jwt.verify(
//     token,
//     tokenSecret
//     //{}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
//   //  callback //Pass errors or decoded token to callback
//   );

verify: function (token, callback) {
    return jwt.verify(token, jwtSecret, callback);
  }
};
