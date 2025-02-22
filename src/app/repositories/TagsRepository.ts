import { prismaClient } from "../../database/prismaClient";

export interface FindTagByName {
    name: string
}
export class TagsRepository {

    // createTag
    async create (name: string) {
        const user = await prismaClient.tag.create({
            data: {
                name
            }
        })

        return user
    }

    // find tag by name
    async findTagByName({name}:FindTagByName) {
        const tag = await prismaClient.tag.findFirst({
            where: {name},
            select: {
                id: true,
                name: true
            }
        })

        return tag
    }
}