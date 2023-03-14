const { User, BlogPost, Category } = require('../models');

const all = async () => {
  const allPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', attributes: { exclude: 'PostCategory' } },
    ],
  });

  return allPosts;
};

module.exports = {
  all,
};
