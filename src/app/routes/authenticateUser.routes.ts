import { Request, Response, Router } from "express";
import { AuthenticateUserController } from "../controllers/AuthenticateUserController";


const authenticateUserRoutes = Router()

const authenticateUserController = new AuthenticateUserController()
authenticateUserRoutes.post('/login', (request: Request, response: Response) => {
    authenticateUserController.hanlde(request, response)
})

export {authenticateUserRoutes}