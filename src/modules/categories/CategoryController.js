import slugify from 'slugify';
import Category from './model/Category.js';

export default {
  async new(req, res) {
    res.render('admin/categories/new');
  },

  async save(req, res) {
    const { title } = req.body;

    if (title !== undefined) {
      await Category.create({
        title,
        slug: slugify(title),
      });
      res.redirect('/admin/categories');
    }
    res.redirect('/admin/categories/new');
  },

  async categories(req, res) {
    const categories = await Category.findAll();
    res.render('admin/categories/index', { categories });
  },

  async delete(req, res) {
    const { id } = req.body;
    if (id !== undefined) {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(id)) {
        res.redirect('/admin/categories');
      } else {
        await Category.destroy({
          where: { id },
        });
        res.redirect('/admin/categories');
      }
    } else {
      res.redirect('/admin/categories');
    }
  },

  async edit(req, res) {
    const { id } = req.params;
    const category = await Category.findByPk(id);
    if (!category) {
      res.redirect('/admin/categories');
    }
    res.render('admin/categories/edit', { category });
  },

  async update(req, res) {
    const { title } = req.body;
    const { id } = req.body;

    const body = {
      title,
      slug: slugify(title),
    };

    await Category.update(body, { where: { id } });

    res.redirect('/admin/categories');
  },
};
