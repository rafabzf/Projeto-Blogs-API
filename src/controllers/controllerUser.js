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

const all = async (_req, res) => {
  try {
    const users = await serviceUser.all();
    return res
      .status(200)
      .json(users);
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message });
  }
};

const userGet = async (req, res) => {
  const { id } = req.params;

  const idUser = await serviceUser.userGet(id);

  if (!idUser) return res.status(404).json({ message: 'User does not exist' });

  return res
    .status(200)
    .json(idUser);
};

module.exports = {
  createUser,
  all,
  userGet,
};