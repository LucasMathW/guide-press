import express from 'express'
const routes = express.Router()

import CategoryController from './modules/categories/CategoryController.js'
import ArticleController from './modules/articles/ArticleController.js'

//Category Routes
routes.get('/admin/categories/new', CategoryController.index)
routes.post('/categories/save', CategoryController.save)

//Article Routes
routes.get('/article', ArticleController.index)

export default routes;
