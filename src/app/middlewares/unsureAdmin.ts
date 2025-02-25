import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../repositories/UsersRepository";

export async function unsureAdmin (request: Request, response: Response, next: NextFunction): Promise<void> {
    // const admin = true
    const userRepository = new UserRepository()
    const {id_user} = request

    const {admin} = await userRepository.findUserById(id_user)


    if(!admin) {
        response.status(401).json({err: 'User Unauthorized'})
        return
    }
    
    next()
    
}