import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface CategoryDTO {
    name: string
}
export class CreateCategoryController {
    async handle(request: Request, response: Response) {
        const {name}:CategoryDTO = request.body

        const category = await prismaClient.category.create({
            data: {
                name
            }
        })
        response.status(201)
        return response.json(category)
    }
}