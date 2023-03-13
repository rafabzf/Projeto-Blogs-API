const { serviceCategories } = require('../services');

const createCategories = async (req, res) => {
  try {
    const { name } = req.body;

    await serviceCategories.createCategories({ name });

    const c = await serviceCategories.nameCategories(name);

    return res
      .status(201)
      .json(c);
  } catch (e) {
    return res
      .status(400)
      .json({ message: '"name" is required' });
  }
};

module.exports = {
  createCategories,
};