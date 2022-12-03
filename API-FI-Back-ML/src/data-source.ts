import "reflect-metadata"
import { DataSource } from "typeorm"
import { LivrosML } from "./entity/LivrosML"
import { UserML } from "./entity/UserML"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "admin",
    password: "admin",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserML, LivrosML], 
    migrations: [],
    subscribers: [],
})
