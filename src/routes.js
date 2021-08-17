import express from 'express';

import CategoryController from './modules/categories/CategoryController.js';
import ArticleController from './modules/articles/ArticleController.js';

const routes = express.Router();

// Category Routes
routes.get('/admin/categories/new', CategoryController.new);
routes.get('/admin/categories', CategoryController.categories);
routes.get('/admin/categories/edit/:id', CategoryController.edit);

routes.post('/categories/save', CategoryController.save);
routes.post('/categories/delete', CategoryController.delete);
routes.post('/categories/update', CategoryController.update);

// Article Routes
routes.get('/admin/articles/new', ArticleController.new);
routes.get('/admin/articles', ArticleController.articles);
routes.get('/admin/articles/edit/:id', ArticleController.edit);

routes.post('/articles/save', ArticleController.save);
routes.post('/articles/delete', ArticleController.delete);
routes.post('/articles/update', ArticleController.update);
export default routes;
