/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
var bcrypt = require('bcryptjs');
module.exports = {
	attributes: {
		UserName: { type: 'string', required: true },
		UserPassword: { type: 'string', minLength: 6 },
		EmailAddress: { type: 'string', required: true, unique: true },
		PhoneNumber: { type: 'string', required: true },
		UserCity: { type: 'string', required: true },
		UserState: { type: 'string', required: true },
		UserCountry: { type: 'string', required: true },
		UserAddress1: { type: 'string', required: true },
		UserAddress2: { type: 'string', required: true },
		PostalCode: { type: 'string' },

		// Association orders and customer
		orders: {
			collection: 'orders',
			via: 'orderedBy'
		}
	},

	customToJSON: function() {
		return _.omit(this, [ 'UserPassword', 'ssn' ]);
	},

	comparePassword: function(password, user, cb) {
		bcrypt.compare(password, user.UserPassword, function(err, match) {
			if (err) cb(err);
			if (match) {
				cb(null, true);
			} else {
				cb(err);
			}
		});
	}
};
