/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		// orderId: {
		// 	type: 'string'
		// 	// required: true
		// },
		cartId: {
			type: 'number',
			required: true
		},
		userId: {
			type: 'number',
			required: true
		},
		orderAmount: {
			type: 'number',
			required: true
		},
		orderShipping: {
			type: 'number',
			required: true
		},
		orderTax: {
			required: true,
			type: 'number'
		},
		orderAddress: {
			required: true,
			type: 'string'
			// collection: 'Address',
			// via: 'userId'
		},
		orderPhone: {
			required: true,
			type: 'string'
		},
		orderEmail: {
			required: true,
			type: 'string'
		}
		// orderDate: {
		// 	type: 'string',
		// 	defaultsTo: 'Date.now()'
		// }
	}
};
