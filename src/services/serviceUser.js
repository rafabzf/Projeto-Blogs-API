const { User } = require('../models');

const createUser = async (
  displayName,
  email,
  password,
  image,
) => { 
  const emailGet = await User.findOne({ where: { email } }); 

  if (emailGet) return { type: '409', message: 'User already registered' };

  const registered = await User.create({
    displayName,
    email,
    password,
    image,
  });

  return registered;
};

const all = async () => User.findAll({ attributes: { exclude: 'password' } });

module.exports = {
  createUser,
  all,
};