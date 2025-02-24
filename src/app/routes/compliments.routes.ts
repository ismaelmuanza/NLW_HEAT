import { Request, Response, Router } from "express";
import { FindComplimentByIdController } from "../controllers/FindComplimentByIdController";
import { CreateComplitsController } from "../controllers/CreateComplitsController";


const complimentsRoutes = Router()

const findComplimentByIdController = new FindComplimentByIdController()
const createComplimentController = new CreateComplitsController()

// find complit by id
complimentsRoutes.post('/compliment/id', (request: Request, response: Response) => {
    findComplimentByIdController.handle(request, response)
})
// create compliment
complimentsRoutes.post('/compliment', (request: Request, response: Response) => {
    createComplimentController.handle(request, response)
})

export { complimentsRoutes }