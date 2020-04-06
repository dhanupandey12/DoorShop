/**
 * ProductCategoryController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	getCategories: function(req, res) {
		ProductCategory.find({})
			.then(function(categories) {
				if (categories == '') return res.send(449);
				res.json(categories);
			})
			.catch(function(err) {
				res.serverError(err);
			});
	},
	getCategory: function(req, res) {
		ProductCategory.find({ id: req.params.id })
			.then(function(category) {
				if (category == '') return res.send(449);
				res.json(category);
			})
			.catch(function(err) {
				res.serverError(err);
			});
		// res.send('Accessed getcategory');
	},
	addCategory: function(req, res) {
		categoryObj = {
			CategoryName: req.body.category
		};
		// console.log(categoryObj);
		ProductCategory.create(categoryObj)
			.fetch()
			.then(function(category) {
				if (category == '') return res.send(449);
				res.json(category);
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
		// res.send('Accessed addcategory');
	},
	editCategory: function(req, res) {
		newResult = {
			CategoryName: req.body.category
		};
		console.log('in edit');
		ProductCategory.update({ _id: req.params.id })
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
	},

	deleteCategory: function(req, res) {
		ProductCategory.destroy({ _id: req.params.id })
			.fetch()
			.then(function(deletedCategory) {
				if (deletedCategory == '') return res.send(449);
				res.json(deletedCategory);
			})
			.catch(function(err) {
				res.serverError(err);
			});
	}
};
