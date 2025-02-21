import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductDTO {
    name: string
    bar_code: string
    price: number
    id_category: string
}
export class CreateProductWithCategoryExist {
    async handle(request: Request, response: Response) {
        const {name, bar_code, price, id_category}:ProductDTO = request.body

        const product = await prismaClient.productCategory.create({
            data: {
                product: {
                    create: {
                        name, 
                        bar_code, 
                        price
                    }
                },
                category: {
                    connect: {
                        id: id_category
                    }
                }
            }
        })

        response.status(201)
        return response.json(product)
    }
}