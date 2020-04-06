/**
 * Orders.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		// orderId: { type: 'string', required: true },
		cartId: { type: 'number', required: true },
		userId: { type: 'number', required: true },
		orderAmount: { type: 'number', required: true },
		orderShipping: { type: 'number', required: true },
		orderTax: { type: 'number', required: true },
		orderAddress: { type: 'string', required: true },
		orderPhone: { type: 'string', required: true },
		orderEmail: { type: 'string', required: true }
	}
};
