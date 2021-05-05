const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const log = require('../../../utils/logger')
const passport = require('passport')
const errorHandler = require('../../libs/errorHandler').handleErrors

const userRouter = express.Router()
const userController = require('./user.controller')
const {validateUser,validateLoginRequest} = require('./user.validate')
const {UserDataAlreadyInUse,WrongCredentials} = require('./user.errors')

const jwtAuthenticate = passport.authenticate('jwt', {
    session:false
})

const secret = "mybudgetSecret"

function transformBodyToLowerCase(req,res,next){
    req.body.email = req.body.email.toLowerCase()
    next()
}

// Create user route
userRouter.post('/', [validateUser,transformBodyToLowerCase], errorHandler(async(req,res) => {
    let newUser = req.body
    let userExist = await userController.userExist(newUser.email)
    if(userExist){
        log.warn(`An user with email ${newUser.email} already exist`)
        res.status(409).send(`The email ${newUser.email} already belongs to an user`)
        throw new UserDataAlreadyInUse
    }
    let hashedPassword = await bcrypt.hash(newUser.password, 10)
    let response = await userController.createUser(newUser.email,hashedPassword)
    log.info(`User created`)
    res.status(200).send(response)    
}))

//Login route
userRouter.post('/login', [validateLoginRequest,transformBodyToLowerCase], errorHandler(async(req,res) => {
    let nonAuthenticateUser = req.body
    let userExist = await userController.userExist(nonAuthenticateUser.email)
    if(!userExist) throw new WrongCredentials
    let registeredUser = await userController.getUser({email: nonAuthenticateUser.email})
    let passwordIsCorrect = await bcrypt.compare(nonAuthenticateUser.password, registeredUser.password)
    if(!passwordIsCorrect){
        res.status(400).send('Wrong credentials')
        throw new WrongCredentials
    } 
    let token = jwt.sign({id: registeredUser.id},secret, {expiresIn: '1h'})
    log.info(`Successful login for user ${registeredUser.email}`)
    res.status(200).send(token)
}))

//whoami Route
userRouter.get('/whoami',jwtAuthenticate, errorHandler(async(req,res) => {
    res.json(req.user)
}))

module.exports = userRouter