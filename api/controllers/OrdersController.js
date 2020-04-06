/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addOrder: (req, res) => {
		let orderObj = {
			cartId: req.body.cartId,
			userId: req.body.userId,
			orderAmount: req.body.amount,
			orderShipping: req.body.shipping,
			orderTax: req.body.tax,
			orderAddress: req.body.address,
			orderPhone: req.body.phone,
			orderEmail: req.body.email
		};
		Orders.create(orderObj).fetch().exec((err, order) => {
			if (err) {
				res.send(err);
			}
			// console.log(order);
			res.send(order);
		});
	},

	getOrders: (req, res) => {
		Orders.find({}).exec((err, orders) => {
			if (err) {
				res.send(err);
			}
			res.send(orders);
		});
	},

	getOrder: (req, res) => {
		Orders.find({ id: req.params.id }).exec((err, order) => {
			if (err) {
				res.send(err);
			}
			res.send(order);
		});
	},

	deleteOrder: (req, res) => {
		Orders.destroy({ id: req.params.id }).fetch().exec((err, order) => {
			if (err) {
				res.send(err);
			}
			res.send(order);
		});
	},

	deleteOrders: (req, res) => {
		Orders.destroy({}).fetch().exec((err, orders) => {
			if (err) {
				res.send(err);
			}
			res.send(orders);
		});
	}
};
