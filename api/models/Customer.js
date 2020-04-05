/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		userid: { type: 'string' },
		Name: { type: 'string' },
		EmailAddress: { type: 'string' },
		PhoneNumber: { type: 'number' }
		// DateCreated:{type: 'string', columnType: 'date', defaultsTo:Date.now},
		// EmailVerified:{type:'number',defaultsTo:'0'},
		// address:{type:'string',model:'Address',via:'userid'},
	}
};
