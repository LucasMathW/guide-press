import Sequelize from 'sequelize';
import connection from '../../../database/database.js';
import Category from '../../categories/model/Category.js';

const Article = connection.define('articles', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync({ force: false }).then(() => {});

export default Article;
