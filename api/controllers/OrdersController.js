/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addOrder: (req, res) => {
		Customer.findOne({ _id: req.token.id })
			.populate('cart')
			.then(function(user) {
				if (user == '') return res.send(449);
				// console.log(user);
				let orderObj = {
					cartId: user.cart[0].id,
					orderAmount: req.body.amount,
					orderShipping: req.body.shipping,
					orderTax: req.body.tax,
					orderAddress: req.body.address,
					orderPhone: req.body.phone,
					orderEmail: req.body.email,
					orderedBy: user.id,
					ProductId: req.body.productIds
				};
				console.log(orderObj);
				console.log(req.body);
				Orders.create(orderObj)
					.fetch()
					.then((order) => {
						console.log(order);
						Cart.findOne({ id: order.cartId })
							.populate('products')
							.then((oldcart) => {
								// console.log(oldcart);
								productList = oldcart.products.map((p) => p.id);
								// console.log('prdo list:');
								// console.log(productList);
								for (let i = 0; i < req.body.productIds.length; i++) {
									const index = productList.indexOf(req.body.productIds[i]);
									if (index > -1) {
										productList.splice(index, 1); // remove product from product list
									}
								}
								// console.log(newProdList);
								Cart.update({ id: order.cartId }, { products: productList })
									.fetch()
									.exec((err, cart) => {
										if (err) {
											res.serverError(err);
										}
										res.send({ order: order, NewCart: cart });
									});
							})
							.catch(function(err) {
								res.serverError(err);
							});
						// res.send(order)
					})
					.catch({ code: 'E_UNIQUE' }, function(err) {
						res.sendStatus(409);
					})
					// Some other kind of usage / validation error
					.catch({ name: 'UsageError' }, function(err) {
						res.badRequest();
					})
					// If something completely unexpected happened.
					.catch(function(err) {
						res.serverError(err);
					});
			})
			.catch(function(err) {
				res.serverError(err);
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
