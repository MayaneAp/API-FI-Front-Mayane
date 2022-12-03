import "reflect-metadata"
import * as express from "express"
import * as bodyParser from "body-parser"
import * as cors from 'cors'
import { AppDataSource } from "./data-source"
import { routes } from "./routes"

const app = express()
AppDataSource.initialize().then(async () => {

    const app = express()

    app.use(cors())
    app.use(bodyParser.json()) 
    app.use(routes)

    app.listen(3000)
})