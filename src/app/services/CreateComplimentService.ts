import { ComplimentsDTO, ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UserRepository } from "../repositories/UsersRepository";


export class CreateComplimentService {
    async execute ({id_user_sender, id_user_receiver, id_tag, message}: ComplimentsDTO) {
        const complimentRepository = new ComplimentsRepository()
        const userRepository = new UserRepository()
        
        const verifyUserExistsById = await userRepository.findUserById(id_user_receiver)
        
        if(id_user_sender === id_user_receiver) {
            throw new Error('User Receiver Invalid')
        }

        if(!verifyUserExistsById) {
            throw new Error('User Receiver Does Not Exists')
        }

        const compliment = await complimentRepository.create({id_user_sender, id_user_receiver, id_tag, message})
        
        

        return compliment
    }
}