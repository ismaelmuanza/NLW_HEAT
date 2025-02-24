import { prismaClient } from "../../database/prismaClient"


export interface CreateUserDTO {
    name: string
    email: string
    password: string
    admin?: boolean
}

export interface FindByEmailDTO {
    email: string
}

export class UserRepository {

    // create user
    async createUser ({name, email, password, admin}:CreateUserDTO) {

        const user = await prismaClient.user.create({
            data: {
                name, 
                email,
                password,
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
                password: true,
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

    // find user by id
      // find users
      async findUserById (id: string) {
        const user = await prismaClient.user.findUnique({
            where: {id},
            select: {
                id: true,
                name: true,
                email: true,
                admin: true
            }
        })

        return user
    }
}