import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import ConnectDB from './Database/Config.js'
import UserRouter from './Router/User.Router.js'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

const port = process.env.PORT 

ConnectDB()

app.use('/api/user',UserRouter) //Base Api 

app.listen(port, ()=>{
    console.log("App is listening in the port-", port);
})