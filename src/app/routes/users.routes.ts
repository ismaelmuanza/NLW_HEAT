import { Request, Response, Router } from "express";
import { CreateUserController } from "../controllers/CreateUserController";
import { FindUserByEmailController } from "../controllers/FindUserByEmailController";
import { FindUsersController } from "../controllers/FindUsersController";
import { FindUserByIdController } from "../controllers/FindUserByIdController";


const userRoutes = Router()
const createUserController = new CreateUserController()
const findUserByEmailController = new FindUserByEmailController()
const findUsersController = new FindUsersController()
const findUserByIdController = new FindUserByIdController()

// create user
userRoutes.post('/user', (request: Request, response: Response) => {
    createUserController.handle(request, response)
})
// find user by email
userRoutes.post('/user/email', (request: Request, response: Response) => {
    
    findUserByEmailController.handle(request, response)
})
// find all users
userRoutes.get('/users', (request: Request, response: Response) => {
    findUsersController.handle(request, response)
})
// find user by id
userRoutes.post('/user/id', (request: Request, response: Response) => {
    findUserByIdController.handle(request, response)
})



export {userRoutes}