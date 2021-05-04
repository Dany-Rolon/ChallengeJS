const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const log = require('../../../utils/logger')
const errorHandler = require('../../libs/errorHandler').procesarErrores

const userRouter = express.Router()
const userController = require('./user.controller')
const {validateUser} = require('./user.validate')
const {UserDataAlreadyInUse,WrongCredentials} = require('./user.errors')

function transformBodyToLowerCase(req,res,next){
    req.body.email = req.body.email.toLowerCase()
    next()
}

userRouter.post('/', [validateUser,transformBodyToLowerCase], errorHandler(async(req,res) => {
    let newUser = req.body
    let userExist = userController.userExist(newUser.email)
    console.log('userExist: ', userExist)
    // if(userExist){
    //     log.warn(`An user with email ${newUser.email} already exist`)
    //     res.status(409).send(`The email ${newUser.email} already belongs to an user`)
    //     throw new UserDataAlreadyInUse
    // } else {
    //     console.log('El usuario no existe, se procede a crearlo')
    //     let hashedPassword = await bcrypt.hash(newUser.password, 10)
    //     userController.createUser(newUser.email,hashedPassword)
    //     res.status(200).send('User Created')
    // }
}))

module.exports = userRouter