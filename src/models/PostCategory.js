module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    categoryId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    postId: {
      type: DataTypes.INTEGER,
      foreignKey: true
    },
  },
    {
      underscored: true,
      timestamps: false,
      tableName: 'posts_categories'
    }
  );
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      foreignKey: 'categoryId',
      otherKey: 'postId',
      through: 'PostCategory',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'post',
      foreignKey: 'postId',
      otherKey: 'categoryId',
      through: 'PostCategory',
    });
  };
  return PostCategory;
}