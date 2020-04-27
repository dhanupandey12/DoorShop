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
			orderAmount: req.body.orderAmount,
			orderShipping: req.body.orderShipping,
			orderTax: req.body.orderTax,
			orderAddress: req.body.orderAddress,
			orderPhone: req.body.orderPhone,
			orderEmail: req.body.orderEmail,
			orderedBy: req.body.customer,
			ProductId: req.body.productIds
		};

		Orders.create(orderObj).fetch().exec((err, order) => {
			if (err) {
				console.log(err);
				if (err.code == 'E_INVALID_NEW_RECORD') res.badRequest();
				else res.serverError(err);
			} else {
				Customer.find({ _id: req.params.id }, (err, user) => {
					if (err) res.serverError(err);
					else {
						user.order = order;
						order.orderedBy = req.params.id;
						res.send(order);
					}
				});
			}
			// console.log(order);
		});
	},

	getOrders: (req, res) => {
		Orders.find({}).populate('ProductId').populate('orderedBy').exec((err, orders) => {
			if (err) {
				res.serverError(err);
			}
			res.send(orders);
		});
	},

	getOrder: (req, res) => {
		Orders.findOne({ id: req.params.id }).populate('ProductId').populate('orderedBy').exec((err, order) => {
			if (err) {
				res.serverError(err);
			}
			res.send(order);
		});
	},

	deleteOrder: (req, res) => {
		Orders.destroy({ id: req.params.id }).fetch().exec((err, order) => {
			if (err) {
				res.serverError(err);
			}
			res.send(order);
		});
	},

	deleteOrders: (req, res) => {
		Orders.destroy({}).fetch().exec((err, orders) => {
			if (err) {
				res.serverError(err);
			}
			res.send(orders);
		});
	}
};
