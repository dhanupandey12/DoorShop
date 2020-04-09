/**
 * CartController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addCart: (req, res) => {
		// let productsList = [];
		// let products = req.body.products;
		// for (let pid in products) {
		// 	productsList.push(products[pid]);
		// }
		let cartObj = {
			cartId: req.body.cartId,
			userId: req.body.userId,
			cartTotal: req.body.total,
			products: req.body.products
		};
		Cart.create(cartObj).fetch().exec((err, cart) => {
			if (err) {
				if (err.code == 'E_INVALID_NEW_RECORD') res.badRequest();
				else if (err.code == 'E_UNIQUE') res.sendStatus(409);
				else res.serverError(err);
			}
			// console.log(cart);
			res.send(cart);
		});
	},

	getCarts: (req, res) => {
		Cart.find({}).exec((err, carts) => {
			if (err) {
				res.serverError(err);
			}
			res.send(carts);
		});
	},

	getCart: (req, res) => {
		Cart.find({ id: req.params.id }).exec((err, cart) => {
			if (err) {
				res.serverError(err);
			}
			res.send(cart);
		});
	},

	editCart: (req, res) => {
		let editedCart = {
			cartId: req.body.cartId,
			userId: req.body.userId,
			cartTotal: req.body.total,
			products: req.body.products
		};
		Cart.update({ id: req.params.id }, editedCart).fetch().exec((err, cart) => {
			if (err) {
				if (err.code == 'E_INVALID_VALUES_TO_SET') res.badRequest();
				else res.serverError(err);
			}
			res.send(cart);
		});
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
