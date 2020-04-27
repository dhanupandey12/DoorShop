/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
	loginUser: function(req, res) {
		var email = req.body.EmailAddress;
		var password = req.body.UserPassword;

		if (!email || !password) {
			return res.status(401).json({ err: 'email and password required' });
		}

		Customer.findOne({ EmailAddress: email }, function(err, user) {
			if (!user) {
				return res.status(401).json({ err: 'invalid email or password' });
			}

			Customer.comparePassword(password, user, function(err, valid) {
				if (err) {
					return res.status(404).json({ err: 'forbidden' });
				}

				if (!valid) {
					return res.status(401).json({ err: 'invalid email or password' });
				} else {
					res.status(200).json({
						user: user,
						token: jwToken.issue({ id: user.id })
					});
				}
			});
		});
	},

	loginShop: function(req, res) {
		var email = req.body.EmailAddress;
		var password = req.body.UserPassword;

		if (!email || !password) {
			return res.status(401).json({ err: 'email and password required' });
		}

		Shopkeeper.findOne({ EmailAddress: email }, function(err, user) {
			if (!user) {
				return res.status(401).json({ err: 'invalid email or password' });
			}

			Shopkeeper.comparePassword(password, user, function(err, valid) {
				if (err) {
					return res.status(404).json({ err: 'forbidden' });
				}

				if (!valid) {
					return res.status(401).json({ err: 'invalid email or password' });
				} else {
					res.status(200).json({
						user: user,
						token: jwToken.issue({ id: user.id })
					});
				}
			});
		});
	}
};
