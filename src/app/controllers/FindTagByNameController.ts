import { Request, Response } from "express";
import { FindTagByNameService } from "../services/FindTagByNameService";


export class FindTagByNameController {
    async handle (request: Request, response: Response) {

        try {

            const {name} = request.body

            const findTagByNameService = new FindTagByNameService()

            const tag = await findTagByNameService.execute({name})

            return response.status(200).json(tag)


        } catch(err) {
            return response.status(400).json({error: err.message})
        }

       


    }
}