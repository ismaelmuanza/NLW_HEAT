import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductDTO{
    name: string
    bar_code: string
    price: number
}

export class CreateProductController {
    async handle (request: Request, response: Response) {
        const {name, bar_code, price}:ProductDTO = request.body

        const product = await prismaClient.product.create({
            data: {
                bar_code, name, price
            }
        })

        response.status(201)

        return response.json(product)
    }
}