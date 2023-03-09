const express = require('express');

const { controllerUser } = require('../controllers');

const validationInputs = require('../middlewares/validationInputs');

const routers = express.Router();

routers.post('/', validationInputs, controllerUser.userGet);

module.exports = routers;