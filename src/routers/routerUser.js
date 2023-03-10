const express = require('express');

const controllerUser = require('../controllers/controllerUser');

const { 
  validationName,
  validationEmail,
  validationPassword,
} = require('../middlewares/createUser');

const routes = express.Router();

routes.post('/',
validationName, validationEmail, validationPassword, controllerUser.createUser);

module.exports = routes;
