import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const mongoUrl = process.env.MONGODBCONNECTIONSTRING
const ConnectDB = async()=>{
    try {
       const connection  = await mongoose.connect(mongoUrl)
       console.log("Mongo-DB Connected Successfully"); 
    } catch (error) {
       console.log(error);
    }
}

export default ConnectDB;