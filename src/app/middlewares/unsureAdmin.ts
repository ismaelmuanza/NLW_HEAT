import { NextFunction, Request, Response } from "express";

export function unsureAdmin (request: Request, response: Response, next: NextFunction): void {
    let admin = false

    if(admin) {
     next()
     return
    }

    response.status(401).json({err: 'User Unauthorized'})
}