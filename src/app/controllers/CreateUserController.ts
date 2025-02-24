import { Request, Response } from "express";
import { CreateUserDTO } from "../repositories/UsersRepository";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
    async handle (request: Request, response: Response) {
     
        try {
               
        const {name, email, password, admin}:CreateUserDTO = request.body

        const createUserService = new CreateUserService() 
        const user = await createUserService.execute({name, email, password, admin})

        response.status(201)
        response.json(user)

        } catch(err) {
            return response.status(400).json(err.message)
        } 

    }
}