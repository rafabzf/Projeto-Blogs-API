const { Category } = require('../models');

const createCategories = async (c) => Category.create(c);

const nameCategories = async (name) => Category.findOne({ where: { name } });

module.exports = {
  createCategories,
  nameCategories,
};