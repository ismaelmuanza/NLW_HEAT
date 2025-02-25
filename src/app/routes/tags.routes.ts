import { Request, Response, Router } from "express";
import { CreateTagController } from "../controllers/CreateTagController";
import { FindTagByNameController } from "../controllers/FindTagByNameController";
import { unsureAdmin } from "../middlewares/unsureAdmin";
import { userAuthenticate } from "../middlewares/userAuthenticate";


const tagsRoutes = Router()

const createTagController = new CreateTagController() 
const findTagByNameController = new FindTagByNameController() 
// create tag
tagsRoutes.post('/tag', userAuthenticate, unsureAdmin, (request: Request, response: Response) => {
    createTagController.handle(request, response)
})
// findBYName
tagsRoutes.post('/tag/name', (request: Request, response: Response) => {
    findTagByNameController.handle(request, response)
})

export { tagsRoutes }