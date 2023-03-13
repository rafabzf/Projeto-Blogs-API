const express = require('express');

const { controllerCategories } = require('../controllers');

const { authentication } = require('../middlewares/token');

const routes = express.Router();

routes.post('/', authentication, controllerCategories.createCategories);

routes.get('/', authentication, controllerCategories.allCategories);

module.exports = routes;