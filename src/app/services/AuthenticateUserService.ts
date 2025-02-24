import { UserRepository } from "../repositories/UsersRepository"
import {compare} from 'bcrypt'
import {sign} from 'jsonwebtoken'

interface AuthenticateData {
    email: string
    password: string
}

export class AuthenticateUserService {
    async execute({email, password}: AuthenticateData) {
        const userRepository = new UserRepository()
        const verifyUserExistsByEmail = await userRepository.findUserByEmail({email})

        if(!verifyUserExistsByEmail) {
            throw new Error('Email or Password Incorrect')
        }

        const user = verifyUserExistsByEmail
        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch) {
            throw new Error('Email or Password Incorrect')
        }

        const JWTSecret = 'HH22@77&JHSJHHS09.K-,HHJDSD+SD'
        const token = sign(
            {
            email: user.email,
            admin: user.admin
        }, JWTSecret, 
        {
            subject: user.id,
            expiresIn: '24H'
        })

        return token

    }
}