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
			// console.log(order);
			res.send(order);
		});
	},

	getOrders: (req, res) => {
		Orders.find({}).exec((err, orders) => {
			res.send(orders);
		});
	},

	getOrder: (req, res) => {
		Orders.find({ id: req.params.id }).exec((err, order) => {
			res.send(order);
		});
	}
};
