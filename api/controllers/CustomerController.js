/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcryptjs');

module.exports = {
	createUser: (req, res) => {
		var user;
		if (req.body.UserPassword !== req.body.confirmPassword) {
			return res.status(401).json("Password doesn't match");
		}

		var UserPassword = req.body.UserPassword;
		var hash = bcrypt.hashSync(UserPassword, 10);
		user = {
			UserName: req.body.UserName,
			UserPassword: hash,
			EmailAddress: req.body.EmailAddress,
			PhoneNumber: req.body.PhoneNumber,
			UserCity: req.body.UserCity,
			UserState: req.body.UserState,
			UserCountry: req.body.UserCountry,
			UserAddress1: req.body.UserAddress1,
			UserAddress2: req.body.UserAddress2,
			PostalCode: req.body.PostalCode
		};
		//console.log(user);
		Customer.create(user).fetch().exec((err, result) => {
			if (err) res.send(err);
			//res.status(200).json({user: result, token: jwToken.issue({id: result.id})});
			var ul = 'POST /cart/' + result.id;
			bod = {};
			sails.request(ul, bod, function(err, response, body) {
				if (err) res.send(err);
				res.status(200).json({ user: result, cart: body });
			});
		});
	},

	getUserById: (req, res) => {
		let id = req.params.id;
		Customer.findOne({ _id: id }).populate('orders').populate('cart').exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	getAllUser: (req, res) => {
		Customer.find({}).populate('orders').populate('cart').exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	edit: (req, res) => {
		const id = req.params.id;
		console.log(req.body);
		Customer.update({ _id: id })
			.set(req.body)
			.fetch()
			.then((result) => {
				res.status(200).send(result);
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({
					error: err
				});
			});
	},

	delete: (req, res) => {
		const id = req.params.id;
		Customer.destroy({ _id: id })
			.fetch()
			.then((result) => {
				return res.json(result);
				Customer.destroy({ _id: id }).fetch();
			})
			.catch((err) => {
				console.log(err);
				res.status(500).send({
					error: err
				});
			});
	},

	// delete:(req,res)=>{
	// 	const id = req.params.id;
	// 	Customer.destroy({_id:id}).fetch()
	// 	.exec((err,result)=>{
	// 		if(err)
	// 		return err;
	// 		return res.json(result);
	// 	});
	// }

	// fetching orders for a customer
	fetchOrdersByCustomerId: (req, res) => {
		userId = req.params.userId;
		Customer.findOne({ id: userId }).populate('orders').exec((err, user) => {
			if (err) res.send(err);
			res.send(user.orders);
		});
	},

	// find cart for the customer
	findCartByCustomerId: (req, res) => {
		Customer.findOne({ id: req.params.id }).populate('cart').exec((err, user) => {
			if (err) res.serverError(err);
			res.send(user.cart);
		});
	}
};

/*
{
	"UserName": "shivam",
	"UserPassword": "shivam",
	"confirmPassword": "shivam",
	"EmailAddress": "shivam@gmail.com",
	"PhoneNumber": "3263464567",
	"UserCity": "sdgdg",
	"UserState": "sdgsg",
	"UserCountry": "gdsgs",
	"UserAddress1": "sdgssgs",
	"UserAddress2": "aggsgxs",
	"PostalCode": "433464"
}
*/
