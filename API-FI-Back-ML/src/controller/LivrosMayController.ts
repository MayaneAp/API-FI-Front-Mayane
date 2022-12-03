import { LivrosML } from './../entity/LivrosML';
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

export const getLivrosMay= async (request:Request, response: Response) => {
    const users = await AppDataSource.getRepository(LivrosML).find()
return response.json (users)
};

export const getLivroMay= async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LivrosML).findOneBy(id)
    return response.json (user)
};

export const saveLivroMay = async (request:Request, response: Response) => {
    const user = await AppDataSource.getRepository(LivrosML).save(request.body)
return response.json(user)
}

export const updateLivroMay = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LivrosML).update(id,request.body)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(LivrosML).findOneBy(id)
        response.json(userUpdated)
    }
    return response.status(404).json({message: 'Livro not found!'})
};

export const removeLivroMay = async (request:Request, response: Response) => {
    const id = request.params
    const user = await AppDataSource.getRepository(LivrosML).delete(id)
    if(user.affected ==1){
        const userUpdated = await AppDataSource.getRepository(LivrosML).findOneBy(id)
        return response.json({message: 'Livro file removed'})
    }
    return response.status(404).json({message: 'Livro not found!'})
};