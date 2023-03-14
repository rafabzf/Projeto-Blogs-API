const { servicePost } = require('../services');

const all = async (_req, res) => {
  const allPosts = await servicePost.all();

  return res
    .status(200)
    .json(allPosts);
};

module.exports = {
  all,
};