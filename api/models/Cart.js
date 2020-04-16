/**
 * Cart.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		// cartId: { type: 'number', unique: true, required: true },
		// userId: { type: 'number', unique: true, required: true },
		// products: { type: 'json', columnType: 'array' }

		products: { collection: 'product' }

		// cartTotal: { type: 'number', required: true }
	}
};
