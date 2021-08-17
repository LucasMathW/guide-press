import slugify from 'slugify';
import Category from '../categories/model/Category.js';
import Article from './model/Article.js';

export default {
  async new(req, res) {
    const categories = await Category.findAll();
    res.render('admin/articles/new', { categories });
  },

  async articles(req, res) {
    const articles = await Article.findAll({
      include: [{ model: Category }],
    });
    res.render('admin/articles/index', { articles });
  },

  async edit(req, res) {
    const { id } = req.params;
    const article = await Article.findByPk(id);
    if (article) {
      const categories = await Category.findAll();
      res.render('admin/articles/edit', { article, categories });
    }
    res.redirect('/admin/articles');
  },

  async save(req, res) {
    const { title, category, body } = req.body;
    const slug = slugify(title);
    const article = await Article.create({
      title,
      slug,
      body,
      categoryId: category,
    });
    console.log(article);
    res.redirect('/admin/articles');
  },

  async delete(req, res) {
    const { id } = req.body;

    if (id === undefined) {
      res.redirect('/admin/articles');
    }
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(id)) {
      res.redirect('/admin/articles');
    } else {
      await Article.destroy({
        where: { id },
      });
      res.redirect('/admin/articles');
    }
  },

  async update(req, res) {
    const {
      id, title, body, category,
    } = req.body;

    console.log('TITLE', title);
    console.log('ARTIGO', category);

    const requestBody = {
      title,
      slug: slugify(title),
      body,
      categoryId: category,
    };

    // console.log('body', requestBody);

    await Article.update(requestBody, { where: { id } });

    res.redirect('/admin/articles');
  },

};
