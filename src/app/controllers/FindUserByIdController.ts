import { Request, Response } from "express";
import { FindUserByIdService } from "../services/FindUserByIdService";


export class FindUserByIdController {
    async handle (request: Request, response: Response) {
        try {
            
            const {id} = request.body
            const findUserByIdService = new FindUserByIdService()
            const user = await findUserByIdService.execute(id)

            response.status(200).json(user)

        } catch (err) {
            return response.status(404).json({error: err.message})
        }
    }
}