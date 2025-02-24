import { prismaClient } from "../../database/prismaClient"

export interface ComplimentsDTO {
    id_user_sender: string
    id_user_receiver: string
    id_tag: string
    message: string
}

export class ComplimentsRepository {
    async create ({id_user_sender, id_user_receiver, id_tag, message}:ComplimentsDTO) {
        const compliment = await prismaClient.compliments.create({
            data: {
                id_user_sender,
                id_user_receiver,
                id_tag,
                message
            }
        })

        return compliment
    }

    async findComplimentById (id: string) {
        const compliment = await prismaClient.compliments.findFirst({
            where: {id},
            select: {
                id: true,
                id_user_sender: true,
                id_user_receiver: true,
                id_tag: true,
                message: true
            }
        })

        return compliment
    }
}