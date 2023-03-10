const express = require('express');

const { controllerLogin } = require('../controllers');

const validationInputs = require('../middlewares/validationInputs');

const routers = express.Router();

routers.post('/', validationInputs, controllerLogin.userGet);

module.exports = routers;