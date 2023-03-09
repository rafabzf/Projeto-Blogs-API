module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      type: DataTypes.INTEGER,
      foreingKey: true
    },
    postId: {
      type: DataTypes.INTEGER,
      foreingKey: true
    },
  },
    {
      underscored: true,
      timestamps: false,
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'category',
      foreingKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostCategory',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      foreingKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostCategory',
    });
  };
  return PostCategory;
}