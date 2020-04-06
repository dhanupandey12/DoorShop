/**
 * CustomerController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
	createUser: (req, res) => {
		var user;
		user = {
			UserName: req.body.UserName,
			UserPassword: req.body.UserPassword,
			EmailAddress: req.body.EmailAddress,
			PhoneNumber: req.body.PhoneNumber,
			UserCity: req.body.UserCity,
			UserState: req.body.UserState,
			UserCountry: req.body.UserCountry,
			UserAddress1: req.body.UserAddress1,
			UserAddress2: req.body.UserAddress2,
			PostalCode: req.body.PostalCode
		};
		Customer.create(user).fetch().exec((err, result) => {
			if (err) return err;
			res.json(result);
		});
	},

	getUserById: (req, res) => {
		let id = req.params.id;
		Customer.find({ _id: id }).exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	getAllUser: (req, res) => {
		Customer.find({}).exec((err, user) => {
			if (err) return err;
			res.json(user);
		});
	},

	edit: (req, res) => {
		const id = req.params.id;
		console.log(req.body)
  Customer.update({ _id: id }).set(req.body)
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
		Customer.destroy({_id:id})
		.fetch()
		 	.then((result)=>{
		 		return res.json(result);
		 	Customer.destroy({_id:id}).fetch()
		 	})
			.catch((err) =>{
				console.log(err);
	      res.status(500).send({
	        error: err
	      });
			})
	}

// delete:(req,res)=>{
// 	const id = req.params.id;
// 	Customer.destroy({_id:id}).fetch()
// 	.exec((err,result)=>{
// 		if(err)
// 		return err;
// 		return res.json(result);
// 	});
// }



};
