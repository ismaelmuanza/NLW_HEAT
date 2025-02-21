import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface CreateProductCategoryControllerDTO {
    id_product: string
    id_category: string
}
export class CreateProductCategoryController {
    async handle (request: Request, response: Response) {
        const {id_product, id_category}:CreateProductCategoryControllerDTO = request.body
        const createProductCategoryController = await prismaClient.productCategory.create({
            data: {
                id_product,
                id_category,
            }
        })

        response.status(201)
        return response.json(createProductCategoryController)
    }
}