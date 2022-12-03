import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"
import { UserML } from "../entity/UserML"


    export const getUsersMay = async (request:Request, response: Response) => {
        const users = await AppDataSource.getRepository(UserML).find()
    return response.json (users)
    };
    
    export const getUserMay = async (request:Request, response: Response) => {
        const id = request.params
        const user = await AppDataSource.getRepository(UserML).findOneBy(id)
        return response.json (user)
    };
    
    export const saveUserMay = async (request:Request, response: Response) => {
        const user = await AppDataSource.getRepository(UserML).save(request.body)
    return response.json(user)
    }
    
    export const updateUserMay = async (request:Request, response: Response) => {
        const id = request.params
        const user = await AppDataSource.getRepository(UserML).update(id,request.body)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(UserML).findOneBy(id)
            response.json(userUpdated)
        }
        return response.status(404).json({message: 'User not found!'})
    };
    
    export const removeUserMay = async (request:Request, response: Response) => {
        const id = request.params
        const user = await AppDataSource.getRepository(UserML).delete(id)
        if(user.affected ==1){
            const userUpdated = await AppDataSource.getRepository(UserML).findOneBy(id)
            return response.json({message: 'User file removed'})
        }
        return response.status(404).json({message: 'User not found!'})
    };

