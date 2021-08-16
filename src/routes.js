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
routes.get('/article', ArticleController.index);

export default routes;
