/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
	//Orders routes
	'GET /orders': 'OrdersController.getOrders',
	'GET /orders/:id': 'OrdersController.getOrder',
	'POST /orders': 'OrdersController.addOrder',

	//Products routes
	'Post /Products': 'ProductController.addPost',
	'Get /Products': 'ProductController.getProducts',
	'Get /Products/:id': 'ProductController.getProduct',
	'Put /Products/:id': 'ProductController.editProduct',
	'Delete /Products/:id': 'ProductController.deleteProduct',

	// Product Category routes
	'Post /ProductCategory': 'ProductCategoryController.addCategory',
	'Get /ProductCategory/:id': 'ProductCategoryController.getCategory',
	'Get /ProductCategory': 'ProductCategoryController.getCategories',

	/***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

	'/': { view: 'pages/homepage' }

	/***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
};
