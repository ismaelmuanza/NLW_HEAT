import { Request, Response } from "express";
import { CreateComplimentService } from "../services/CreateComplimentService";


export class CreateComplitsController {
    async handle (request: Request, response: Response) {
        try { 
            const {id_user_receiver, id_tag, message} = request.body
            const {id_user} = request
            console.log(id_user)

            const createComplimentService = new CreateComplimentService()
            const compliment = await createComplimentService.execute({id_user_sender: id_user, id_user_receiver, id_tag, message})

            response.status(201).json(compliment)
        } catch(err) {
            response.status(400).json({error: err.message})
        }
    }
}