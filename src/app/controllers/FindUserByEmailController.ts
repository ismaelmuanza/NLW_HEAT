import { Request, Response } from "express";
import { FindUserByEmailService } from "../services/FindUserByEmailService";


export class FindUserByEmailController {
    async handle (request: Request, response: Response) {
        try {

            const {email} = request.body

            const findUserByEmailService = new FindUserByEmailService()

            const user = await findUserByEmailService.execute({email})

            return response.status(200).json(user)

        } catch(err) {
            return response.status(500).json(err)
        }


    }
}