const { emailGet } = require('../services/serviceUser');

module.exports = async (req, res, next) => {
  const { email } = req.body;

  const user = await emailGet(email);

  if (user) {
    return res
      .status(409)
      .json({ message: 'User already registered' });
  }

  next();
};