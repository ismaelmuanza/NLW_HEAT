import { NextFunction, Request, Response } from "express";
import {verify} from 'jsonwebtoken'
import { JWTSecret } from "../services/AuthenticateUserService";

interface PayloadDatas {
    sub: string
}
export async function userAuthenticate (request: Request, response: Response, next: NextFunction):Promise<void> {

    const authToken = request.headers.authorization

    if(!authToken) {
        response.status(401).end
        return
    }

    const [, token] = authToken.split(' ')
    
    try {
        const {sub} = verify(token, JWTSecret) as PayloadDatas
        request.id_user = sub

        next()

    } catch(err) {
        response.status(401).end
        return
    }

}