import type { Request,Response,NextFunction } from "express";
import * as jwt from 'jsonwebtoken'
interface UserPayload{
    id: string;
    email:string;

}
declare global{
    namespace Express{
        interface Request{
            currentUser?: UserPayload;
        }
    }
}
export const currentUser=(req:Request,res:Response,next:NextFunction)=>{
    if(!(req as any)?.session?.jwt){
        console.log(req)
        return next()
    }
    try{
        const payload=jwt.verify((req as any).session.jwt,process.env.JWT_KEY!) as UserPayload
        req.currentUser=payload
    }catch(err){
    console.log(err)
    }
    next()
}