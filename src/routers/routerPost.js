const express = require('express');

const { controllerPost } = require('../controllers');

const { authentication } = require('../middlewares/token');

const routes = express.Router();

routes.get('/', authentication, controllerPost.all);

module.exports = routes;