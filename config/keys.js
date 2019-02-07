
if(process.env.NODE_ENV === 'production'){
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
module.exports = {
  mongoURI: 'mongodb://user:password12@ds127954.mlab.com:27954/devconnector',
  secretOrKey: 'secret'
};
