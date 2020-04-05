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
		let productobj = {
			ShopId: req.body.shopid,
			CategoryId: req.body.categoryid,
			ProductName: req.body.name,
			Description: req.body.description,
			ProductImagesPaths: 'Working on it now',
			Quantity: req.body.quantity,
			Weight: req.body.weight,
			Price: req.body.price
		};
		// console.log("in post")
		console.log(productobj);

		Product.create(productobj).fetch().exec(function(err, product) {
			if (err) return err;
			console.log(product);
			res.json(product);
		});
	},
	getProducts: function(req, res) {
		Product.find({}, function(err, result) {
			if (err) return err;
			res.json(result);
		});
		// res.send("Accessed getproducts")
	},
	getProduct: function(req, res) {
		Product.find({ _id: req.params.id }, function(err, result) {
			if (err) return err;
			res.json(result);
		});
		// res.send("Accessed getproducts")
	},
	editProduct: function(req, res) {
		newResult = {
			ShopId: req.body.shopid,
			CategoryId: req.body.categoryid,
			ProductName: req.body.name,
			Description: req.body.description,
			ProductImagesPaths: 'Working on it now',
			Quantity: req.body.quantity,
			Weight: req.body.weight,
			Price: req.body.price
		};
		console.log(newResult);
		Product.update({ _id: req.params.id }).set(newResult).fetch().exec(function(err, updatedResult) {
			if (err) return err;
			res.json(updatedResult);
		});
		// ,function(err,updatedResult){
		//   if(err) return err
		//   res.json(updateasResult)
		// })
	},
	deleteProduct: function(req, res) {
		Product.destroy({ _id: req.params.id }).fetch().exec(function(err, deletedProduct) {
			if (err) return err;
			res.json(deletedProduct);
		});
	}
};
