/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
	attributes: {
		CategoryId: { model: 'ProductCategory' },
		ShopId: { type: 'string', required: true, unique: true },
		ProductName: { type: 'string', required: true },
		Description: { type: 'string', required: true },
		ProductImagesPaths: { type: 'string' },
		Quantity: { type: 'number', required: true },
		Weight: { type: 'number', required: true },
		Price: { type: 'number', required: true }
	}
};
