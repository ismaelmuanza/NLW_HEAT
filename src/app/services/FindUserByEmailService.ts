
import { FindByEmailDTO, UserRepository } from "../repositories/UsersRepository" 



export class FindUserByEmailService {
    async execute ({email}: FindByEmailDTO) {

        if(!email || email === undefined) {
            throw new Error('Email Invalid')
        }

        const userRepository = new UserRepository()
        const user = await userRepository.findUserByEmail({email})

        if(!user || user === undefined) {
            throw new Error('User Not Exists')
        }

        return user
    }
}