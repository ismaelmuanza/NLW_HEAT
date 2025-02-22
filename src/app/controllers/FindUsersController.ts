import { Request, Response, response } from "express";
import { FindUsersService } from "../services/FindUsersService";

export class FindUsersController {
    async handle (request: Request, response: Response) {

        try {

            const findUsersService = new FindUsersService()
            const users = await findUsersService.execute()

            response.status(200).json(users)

        } catch (err) {
            response.status(500).json(err)
        }
        
    }
}