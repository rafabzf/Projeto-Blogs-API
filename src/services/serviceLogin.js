const { User } = require('../models');

const userGet = async (email, password) => {
  const validationUser = await User.findOne({ where: { email, password } });

  if (!validationUser) {
    return {
      type: '400',
      message: 'Invalid fields',
    };
  }
  
  return {
    type: null,
    message: '',
  };
};

module.exports = {
  userGet,
};