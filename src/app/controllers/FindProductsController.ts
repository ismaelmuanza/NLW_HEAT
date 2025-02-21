import { Request, Response } from "express";
import { prismaClient } from "../../database/prismaClient";

interface ProductData {
    name: string
    bar_code: string
    price: number
}
export class FindProductsController {
    async handle (request: Request, response: Response) {
        const products = await prismaClient.product.findMany({  
           select: {
            name: true,
            bar_code: true,
            price: true,
            ProductCategory: {
                select: {
                    category: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            }
           }
        })

        response.status(200)
        console.log(products)
        return response.json(products)
    } 
}