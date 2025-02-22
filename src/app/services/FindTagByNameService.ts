import { FindTagByName, TagsRepository } from "../repositories/TagsRepository";


export class FindTagByNameService {
    async execute ({name}:FindTagByName) {
        
        if(!name || name === undefined) {
           throw new Error('Name Invalid')
       }

        const tagsRepository = new TagsRepository()
        const tag = await tagsRepository.findTagByName({name})


        if(!tag || tag === undefined) {
                throw new Error('Tag Not Found')
        }

        return tag

    }
}