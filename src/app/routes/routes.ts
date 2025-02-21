import { Request, Response, Router } from "express";
import { CreateProductController } from "../controllers/CreateProductController";
import { CreateCategoryController } from "../controllers/CreateCategoryController";
import { CreateProductCategoryController } from "../controllers/CreateProductCategoryController";
import { CreateProductWithCategoryExist } from "../controllers/CreateProductWithCategoryExist";
import { FindProductsController } from "../controllers/FindProductsController";

const routes = Router()

const createProductController = new CreateProductController()
const createCategoryController = new CreateCategoryController()
const createProductCategoryController = new CreateProductCategoryController()
const productWithCategoryExist = new CreateProductWithCategoryExist()
const findProductsController = new FindProductsController()

routes.post('/product', (request: Request, response: Response) => {
    createProductController.handle(request, response)
})

routes.post('/category', (request: Request, response: Response) => {
    createCategoryController.handle(request, response)
})

routes.post('/productCategory', (request: Request, response: Response) => {
    createProductCategoryController.handle(request, response)
})
routes.post('/productWithCategoryExist', (request: Request, response: Response) => {
    productWithCategoryExist.handle(request, response)
})
routes.get('/findProducts', (request: Request, response: Response) => {
    findProductsController.handle(request, response)
})

export default routes