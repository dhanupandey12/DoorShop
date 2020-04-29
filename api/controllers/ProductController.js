/**
 * ProductController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	addPost: function(req, res) {
		// console.log("in post")
		// utilService.mkdirp('/assets/images/Product-Images',function(err){
		//     return console.log(err);
		// });
		// utilService.mkdirp('/assets/images/Product-Images/'+req.body.title,function(err){
		//     return console.log(err);
		// });
		// var productImage = req.files.image;
		// var imageUrl='/assets/images/Product-Images/'+req.body.title+'/'+req.files.image.name;
		// productImage.mv(imageUrl,function(err){
		//   return console.log(err);
		// });
		Shopkeeper.findOne({ _id: req.token.id })
			.then(function(user) {
				if (user == '') return res.send(449);
				// console.log(user);
				console.log('1st place');
				// user = user[0];
				var category = req.body.category;
				ProductCategory.findOne({ CategoryName: category })
					.then(function(category) {
						console.log('2nd place');
						if (category == '') return res.send(449);
						// category = category[0];
						// console.log(category);
						let productobj = {
							ShopId: user.id,
							CategoryId: category.id,
							ProductName: req.body.name,
							Description: req.body.description,
							ProductImagesPaths: 'Working on it now',
							Quantity: req.body.quantity,
							Weight: req.body.weight,
							Price: req.body.price
						};
						console.log(productobj);
						Product.create(productobj)
							.fetch()
							.then(function(product) {
								console.log(product);
								res.json(product);
							})
							// Uniqueness constraint violation
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
			})
			.catch(function(err) {
				res.serverError(err);
			});
	},
	getProducts: function(req, res) {
		Product.find({})
			.populate('CategoryId')
			.populate('ShopId')
			.then(function(result) {
				if (result == '') return res.send(449);
				res.json(result);
			})
			.catch(function(err) {
				res.serverError(err);
			});

		// res.send("Accessed getproducts")
	},
	getProduct: function(req, res) {
		Product.findOne({ _id: req.params.id })
			.populate('CategoryId')
			.populate('ShopId')
			.then(function(result) {
				if (result == '') return res.send(449);
				res.json(result);
			})
			.catch(function(err) {
				res.serverError(err);
			});
	},
	editProduct: function(req, res) {
		newResult = {
			ProductName: req.body.name,
			Description: req.body.description,
			ProductImagesPaths: 'Working on it now',
			Quantity: req.body.quantity,
			Weight: req.body.weight,
			Price: req.body.price
		};
		console.log(newResult);

		Product.update({ _id: req.params.id })
			.set(newResult)
			.fetch()
			.then(function(updatedResult) {
				if (updatedResult == '') return res.send(449);
				res.json(updatedResult);
			})
			// Uniqueness constraint violation
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
		// ,function(err,updatedResult){
		//   if(err) return err
		//   res.json(updateasResult)
		// })
	},
	deleteProduct: function(req, res) {
		Product.destroy({ _id: req.params.id })
			.fetch()
			.then(function(deletedProduct) {
				if (deletedProduct == '') return res.send(449);
				res.json(deletedProduct);
			})
			.catch(function(err) {
				res.serverError(err);
			});
	},
	deleteProducts: (req, res) => {
		Product.destroy({})
			.fetch()
			.then(function(deletedProduct) {
				if (deletedProduct == '') return res.send(449);
				res.json(deletedProduct);
			})
			.catch(function(err) {
				res.serverError(err);
			});
	}
};
