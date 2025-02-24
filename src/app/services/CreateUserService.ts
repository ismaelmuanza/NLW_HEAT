import { CreateUserDTO, UserRepository } from "../repositories/UsersRepository";
import {hash} from 'bcrypt'

const userRepository = new UserRepository()

export class CreateUserService {
    async execute ({name, email, password, admin = false}:CreateUserDTO) {


        const findUserByEmail = new UserRepository()
        const verifyUserExistsByEmail = await findUserByEmail.findUserByEmail({email})

        if(verifyUserExistsByEmail) {

            throw new Error('User Already Exists')
        }

        const saltBcrypt = 8
        
        const passwordHash = await hash(password, saltBcrypt)

        const user = await userRepository.createUser({name, email, password: passwordHash, admin})
        return user
    }
}