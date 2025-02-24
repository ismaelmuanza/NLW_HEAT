import { UserRepository } from "../repositories/UsersRepository";

 export class FindUserByIdService {
    async execute (id: string) {
        const userRepository = new UserRepository()
        const user = await userRepository.findUserById(id)

        if(!user) {
            throw new Error('User Does Not Exists')
        }

        return user
    }
 }