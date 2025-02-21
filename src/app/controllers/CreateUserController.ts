import { Request, Response } from "express";
import { CreateUserDTO } from "../repositories/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
    async handle (request: Request, response: Response) {
        
        const {name, email, admin}:CreateUserDTO = request.body

        const createUserService = new CreateUserService() 

        const user = await createUserService.execute({name, email, admin})

        response.status(201)
        response.json(user)
    }
}