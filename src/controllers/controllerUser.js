const jwt = require('jsonwebtoken');

const { serviceUser } = require('../services');

const { JWT_SECRET } = process.env;

const userGet = async (req, res) => {
  const {
    email,
    password,
  } = req.body;

  const {
    type,
    message,
  } = await serviceUser.userGet(email, password);

  if (type) return res.status(type).json({ message });

  const payload = { email: req.body.email };

  const token = jwt.sign(payload, JWT_SECRET);

  return res
    .status(200)
    .json({ token });
};

module.exports = {
  userGet,
};