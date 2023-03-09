const { User } = require('../models');

const userGet = async (email, password) => {
  const validation = await User.findOne({ where: { email, password } });

  if (!validation) return { type: '400', message: 'Invalid fields' };

  return {
    type: null,
    message: '',
  };
};

module.exports = {
  userGet,
};