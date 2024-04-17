import express from 'express'
import { ListAllUser, LoginUser, RegisterUser, forgetPassword, resetPassword } from '../Controller/User.Controller.js'


const UserRouter = express.Router()

UserRouter.post('/register',RegisterUser)
UserRouter.post('/login', LoginUser)
UserRouter.get('/alluser', ListAllUser)
UserRouter.post('/forgetpassword', forgetPassword)
UserRouter.put('/resetpassword', resetPassword)

export default UserRouter