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

//AuthController
'POST /login/User': 'AuthController.loginUser',
'POST /login/Shop': 'AuthController.loginShop',

	//users route
	// Users routes
	'POST /User': 'CustomerController.createUser',
	'GET /User': 'CustomerController.getAllUser',
	'GET /User/:id': 'CustomerController.getUserById',
	'Put /User/:id': 'CustomerController.edit',
	'Delete /User/:id': 'CustomerController.delete',

	//Shopkeeper routes

	'POST /Shopkeeper/': 'ShopkeeperController.createShop',
	'GET /Shopkeeper': 'ShopkeeperController.getAllShop',
	'GET /Shopkeeper/:id': 'ShopkeeperController.getShopById',
	'Put /Shopkeeper/:id': 'ShopkeeperController.edit',
	'Delete /Shopkeeper/:id': 'ShopkeeperController.delete',

	// Orders routes
	'GET /orders': 'OrdersController.getOrders',
	'GET /orders/:id': 'OrdersController.getOrder',
	'POST /orders': 'OrdersController.addOrder',
	'DELETE /orders': 'OrdersController.deleteOrders',
	'DELETE /orders/:id': 'OrdersController.deleteOrder',

	// Cart routes
	'GET /cart': 'CartController.getCarts',
	'GET /cart/:id': 'CartController.getCart',
	'POST /cart': 'CartController.addCart',
	'PUT /cart/:id': 'CartController.editCart',
	'DELETE /cart': 'CartController.deleteCarts',
	'DELETE /cart/:id': 'CartController.deleteCart',

	// Products routes
	'Post /Products': 'ProductController.addPost',
	'Get /Products': 'ProductController.getProducts',
	'Get /Products/:id': 'ProductController.getProduct',
	'Put /Products/:id': 'ProductController.editProduct',
	'Delete /Products/:id': 'ProductController.deleteProduct',

	// Product Category routes
	'Post /ProductCategory': 'ProductCategoryController.addCategory',
	'Get /ProductCategory/:id': 'ProductCategoryController.getCategory',
	'Get /ProductCategory': 'ProductCategoryController.getCategories',
	'Put /ProductCategory/:id': 'ProductCategoryController.editCategory',
	'Delete /ProductCategory/:id': 'ProductCategoryController.deleteCategory',

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
