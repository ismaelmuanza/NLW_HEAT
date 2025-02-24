import { Request, Response } from "express";
import { FindComplimentByIdService } from "../services/FindComplimentByIdService";


export class FindComplimentByIdController {
    async handle (request: Request, response: Response) {

        try {
            const {id} = request.body

            const findComplimentByIdService = new FindComplimentByIdService()
            const compliment = findComplimentByIdService.execute(id)

            response.status(200).json(compliment)

        } catch(err) {
            return response.status(400).json({error: err.message})
        }
      
    }
}