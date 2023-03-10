const express = require('express');

const controllerUser = require('../controllers/controllerUser');

const { 
  validationName,
  validationEmail,
  validationPassword,
} = require('../middlewares/createUser');

const { authentication } = require('../middlewares/token');

const routes = express.Router();

routes.post('/',
validationName, validationEmail, validationPassword, controllerUser.createUser);

routes.get('/', authentication, controllerUser.all);

module.exports = routes;
