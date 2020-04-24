/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
	//'*': ['isAuthorized'],
	ShopkeeperController: {
		'*': 'isAuthorized',
		createShop: true
	},
	CustomerController: {
		'*': 'isAuthorized',
		createUser: true
	},
	ProductController: {
		'*': 'isAuthorized',
		getProduct: true,
		getProducts: true
	},

	AuthController: {
		'*': true
	}
	/***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless overridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ***************************************************************************/

	// '*': true,
};
