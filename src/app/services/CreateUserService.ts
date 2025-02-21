import { CreateUserDTO, UserRepository } from "../repositories/UsersRepository";

const userRepository = new UserRepository()

export class CreateUserService {
    async execute ({name, email, admin}:CreateUserDTO) {
        await userRepository.createUser({name, email, admin})
    }
}