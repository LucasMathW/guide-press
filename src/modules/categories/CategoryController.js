import  express from 'express';
import Category from './model/Category.js';
import slugify from 'slugify'

export default {
  async index(req, res){
     res.render('admin/categories/new');
  },

  async save(req, res){
    const title = req.body.title;

    if(title !== undefined){
      const newCategory = await Category.create({
        title: title,
        slug: slugify(title)
      });
      console.log('newCategory', newCategory);
      return res.json({ category : newCategory})
      // res.redirect("/admin/categories");
    }else{
      res.redirect("/admin/categories/new");
    }

  }
}
