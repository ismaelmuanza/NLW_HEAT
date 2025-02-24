import { ComplimentsRepository } from "../repositories/ComplimentsRepository";


export class FindComplimentByIdService {
    async execute (id: string) {
        const complimentRepository = new ComplimentsRepository()
        const compliment = await complimentRepository.findComplimentById(id)

        if(!compliment) {
            throw new Error('Compliment Does Not Exists')
        }

        return compliment
    }
}