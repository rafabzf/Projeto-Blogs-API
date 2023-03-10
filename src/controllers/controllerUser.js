const jwt = require('jsonwebtoken');

const { serviceUser } = require('../services');

const { JWT_SECRET } = process.env;

const createUser = async (req, res) => {
  const {
    displayName,
    email,
    password,
    image,
  } = req.body;

  const {
    type,
    message,
  } = await serviceUser.createUser(displayName, email, password, image);

  if (type) return res.status(type).json({ message });

  const payload = { displayName, email, image };

  const token = jwt.sign(payload, JWT_SECRET);

  return res
    .status(201)
    .json({ token });
};

module.exports = {
  createUser,
};