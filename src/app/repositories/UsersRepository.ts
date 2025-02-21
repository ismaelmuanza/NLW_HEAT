import { Request, Response } from "express"
import { prismaClient } from "../../database/prismaClient"


export interface CreateUserDTO {
    name: string
    email: string
    admin?: boolean
}

export class UserRepository {
    async createUser ({name, email, admin}:CreateUserDTO) {

        const user = await prismaClient.user.create({
            data: {
                name, 
                email,
                admin
            }
        })

        return user

    }
}