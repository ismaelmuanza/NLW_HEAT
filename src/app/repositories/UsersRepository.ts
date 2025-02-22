import { prismaClient } from "../../database/prismaClient"


export interface CreateUserDTO {
    name: string
    email: string
    admin?: boolean
}

export interface FindByEmailDTO {
    email: string
}

export class UserRepository {

    // create user
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

    // find user by email
    async findUserByEmail ({email}:FindByEmailDTO) {
        const user = await prismaClient.user.findFirst({
            where: {email},
            select: {
                id: true,
                name: true,
                email: true,
                admin: true
            }
        })

        return user
    }

    // find users
    async findUsers () {
        const users = await prismaClient.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                admin: true
            }
        })

        return users
    }
}