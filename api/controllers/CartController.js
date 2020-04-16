/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	/**
	 * Run createCart "POST /cart" first before editing it
	 * i.e. before adding any product in it or removing any product from it
	 */
	createCart: (req, res) => {
		Cart.create({}).fetch().exec((err, cart) => {
			if (err) res.serverError(err);
			res.send(cart);
		});
	},
	// addCart: (req, res) => {
	// 	let cartObj = {
	// 		products: req.body.products
	// 	};
	// 	Cart.create(cartObj).fetch().exec((err, cart) => {
	// 		if (err) {
	// 			if (err.code == 'E_INVALID_NEW_RECORD') res.badRequest();
	// 			else if (err.code == 'E_UNIQUE') res.sendStatus(409);
	// 			else res.serverError(err);
	// 		}
	// 		// console.log(cart);
	// 		res.send(cart);
	// 	});
	// },

	getCarts: (req, res) => {
		Cart.find({}).populate('products').exec((err, carts) => {
			if (err) {
				res.serverError(err);
			}
			res.send(carts);
		});
	},

	getCart: (req, res) => {
		// Cart.find({ id: req.params.id }).exec((err, cart) => {
		// 	if (err) {
		// 		res.serverError(err);
		// 	}
		// 	res.send(cart);
		// });
		Cart.findOne({ id: req.params.id }).populate('products').exec((err, cart) => {
			if (err) res.serverError(err);
			res.send(cart);
		});
	},

	// editCart: (req, res) => {
	// 	let editedCart = {
	// 		// cartId: req.body.cartId,
	// 		// userId: req.body.userId,
	// 		// cartTotal: req.body.total,
	// 		products: req.body.products
	// 	};
	// 	Cart.update({ id: req.params.id }, editedCart).fetch().exec((err, cart) => {
	// 		if (err) {
	// 			if (err.code == 'E_INVALID_VALUES_TO_SET') res.badRequest();
	// 			else res.serverError(err);
	// 		}
	// 		res.send(cart);
	// 	});
	// },

	// "PUT /cart/:cartId/add/:prodId"
	addToCart: async (req, res) => {
		let oldcart = await Cart.findOne({ id: req.params.cartId }).populate('products');
		// console.log(oldcart);
		productList = oldcart.products.map((p) => p.id);
		// console.log('prdo list:');
		// console.log(productList);
		newProdList = [ ...productList, req.params.prodId ]; // add a product id into old product list
		// console.log(newProdList);
		Cart.update({ id: req.params.cartId }, { products: newProdList }).fetch().exec((err, cart) => {
			if (err) {
				res.serverError(err);
			}
			res.send(cart);
		});
		// console.log('cart');
	},

	// "PUT /cart/:cartId/remove/:prodId"
	removeFromCart: async (req, res) => {
		let oldcart = await Cart.findOne({ id: req.params.cartId }).populate('products');
		// console.log(oldcart);
		productList = oldcart.products.map((p) => p.id);
		// console.log('prdo list:');
		console.log(productList);
		const index = productList.indexOf(req.params.prodId);
		if (index > -1) {
			productList.splice(index, 1); // remove product from product list
		}
		console.log(newProdList);
		Cart.update({ id: req.params.cartId }, { products: productList }).fetch().exec((err, cart) => {
			if (err) {
				res.serverError(err);
			}
			res.send(cart);
		});
		// console.log('cart');
	},

	deleteCart: (req, res) => {
		Cart.destroy({ id: req.params.id }).fetch().exec((err, cart) => {
			if (err) {
				res.serverError(err);
			}
			res.send(cart);
		});
	},

	deleteCarts: (req, res) => {
		Cart.destroy({}).fetch().exec((err, carts) => {
			if (err) {
				res.serverError(err);
			}
			res.send(carts);
		});
	}
};
