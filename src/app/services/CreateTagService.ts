import { TagsRepository } from "../repositories/TagsRepository"

export class CreateTagService {

    async execute (name: string) {

        if(!name || name === undefined) {
            throw new Error('Name Invalid')
        }

        const tagsRepository = new TagsRepository()
        const verifyTagExists = await tagsRepository.findTagByName({name})

        if(verifyTagExists) {
            throw new Error('Tag Already Exists')
        }
        
        const tag = await tagsRepository.create(name)
        
        return tag
    }

}