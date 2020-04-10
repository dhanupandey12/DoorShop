/**
 * ShopkeeperController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcryptjs');
module.exports = {
  createShop: (req, res) => {
		var user;
    if (req.body.UserPassword !== req.body.confirmPassword) {
     return res.status(401).json("Password doesn't match")
   }

		var UserPassword=req.body.UserPassword;
		var hash = bcrypt.hashSync(UserPassword, 10 );
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
   console.log(user);
		Shopkeeper.create(user).fetch().exec((err, result) => {
			if (err) return err;
			//res.status(200).json({user: result, token: jwToken.issue({id: result.id})});
      res.status(200).json({user:result});
		});
	},

	getShopById: (req, res) => {
		let id = req.params.id;
		Shopkeeper.find({ _id: id }).exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	getAllShop: (req, res) => {
		Shopkeeper.find({}).exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	edit: (req, res) => {
		const id = req.params.id;
		console.log(req.body)
  Shopkeeper.update({ _id: id }).set(req.body)
	  .fetch()
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        error: err
      });
    });
	},

	delete: (req, res) => {
		const id = req.params.id;
		Shopkeeper.destroy({_id:id})
		.fetch()
		 	.then((result)=>{
		 		return res.json(result);
		 	Shopkeeper.destroy({_id:id}).fetch()
		 	})
			.catch((err) =>{
				console.log(err);
	      res.status(500).send({
	        error: err
	      });
			})
	}

};
