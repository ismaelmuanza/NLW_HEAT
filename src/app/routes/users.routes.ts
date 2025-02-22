import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserByEmailController } from "../controllers/FindUserByEmailController";
import { FindUsersController } from "../controllers/FindUsersController";


const userRoutes = Router()
const createUserController = new CreateUserController()
const findUserByEmailController = new FindUserByEmailController()
const findUsersController = new FindUsersController()

userRoutes.post('/user', (request: Request, response: Response) => {
    createUserController.handle(request, response)
})
userRoutes.post('/user/email', (request: Request, response: Response) => {
    
    findUserByEmailController.handle(request, response)
})
userRoutes.get('/users', (request: Request, response: Response) => {
    findUsersController.handle(request, response)
})


export {userRoutes}