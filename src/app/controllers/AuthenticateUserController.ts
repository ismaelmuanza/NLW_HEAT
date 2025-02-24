import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";


export class AuthenticateUserController {

    async hanlde (request: Request, response: Response) {
        try {

            const {email, password} = request.body

            const authenticateUserService = new AuthenticateUserService()
            const token = await authenticateUserService.execute({email, password})
    
            response.status(200).json(token) 

        } catch(err) {
            return response.status(400).json({error: err.message})
        }
       

    }
    
}