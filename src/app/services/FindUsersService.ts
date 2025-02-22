import { UserRepository } from "../repositories/UsersRepository";

export class FindUsersService {
    async execute () {
        const userRepository = new UserRepository()


        const users = await userRepository.findUsers()

        if(!users) {
            throw new Error('Internal Error')
        }

        return users
    }
}