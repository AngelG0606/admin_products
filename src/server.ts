import express from 'express'
import router from './router'
import db from './config/db'


async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log('Conexion exitosa a la BD')
    } catch (error) {
        console.log(error)
        console.log('Hubo un error al conectarse a la BD')
    }
}
connectDB()

const server  = express()

server.use(express.json())


server.use('/api/products', router)


export default server

