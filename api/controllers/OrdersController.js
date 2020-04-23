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
			orderAmount: req.body.amount,
			orderShipping: req.body.shipping,
			orderTax: req.body.tax,
			orderAddress: req.body.address,
			orderPhone: req.body.phone,
			orderEmail: req.body.email,
			orderedBy: req.body.customer,
			ProductId: req.body.productIds
		};
		console.log(orderObj);
		console.log(req.body);
    let id = req.params.userId;
		Customer.find({_id:id},(err,user)=>{

		});
		Orders.create(orderObj).fetch().exec((err, order) => {
			if (err) {
				console.log(err);
				if (err.code == 'E_INVALID_NEW_RECORD') res.badRequest();
				else res.serverError(err);
			}
			// console.log(order);
			res.send(order);
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

	//fetching orders for a customer
	// fetchOrdersByCustomerId: (req, res) => {
	// 	userId = req.params.userId;
	// 	Customer.findOne({ id: userId }).populate('orders').exec((err, user) => {
	// 		if (err) res.send(err);
	// 		res.send(user.orders);
	// 	});
	// }
};
