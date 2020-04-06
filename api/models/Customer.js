/**
 * Customer.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
			UserName: { type: 'string', required: true },
		UserPassword:{ type: 'string', required: true },
		EmailAddress: { type: 'string', required: true },
		PhoneNumber:{ type: 'string', required: true },
		UserCity    :{ type: 'string', required: true },
		UserSate  :{ type: 'string', required: true },
		UserCountry:{ type: 'string', required: true },
		UserAddress1:{ type: 'string', required: true },
		UserAddress:{ type: 'string', required: true },
	  PostalCode :{ type: 'string' }
		// DateCreated:{type: 'string', columnType: 'date', defaultsTo:Date.now},
		// EmailVerified:{type:'number',defaultsTo:'0'},
		// address:{type:'string',model:'Address',via:'userid'},
	}
};
