import { CreateUserDTO, UserRepository } from "../repositories/UsersRepository";

const userRepository = new UserRepository()

export class CreateUserService {
    async execute ({name, email, admin}:CreateUserDTO) {


        const findUserByEmail = new UserRepository()
        const verifyUserExistsByEmail = await findUserByEmail.findUserByEmail({email})

        if(verifyUserExistsByEmail) {

            throw new Error('User Already Exists')
        }

        await userRepository.createUser({name, email, admin})
    }
}