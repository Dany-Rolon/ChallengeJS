const Joi = require('joi')
const log = require('../../../utils/logger')

const bluePrintUser = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().max(200).required()
})

const validateUser = (req,res,next) => {
    const result = bluePrintUser.validate(req.body, {abortEarly:false, convert:false})
    if(!result.error){
        next()
    } else {
        res.status(400).send('Invalid user information')
        log.warn("User couldn't be validated")
    }
}

const bluePrintLoginRequest = Joi.object({
    email: Joi.required(),
    password: Joi.required()
})

const validateLoginRequest = (req,res,next) => {
    const result = bluePrintLoginRequest.validate(req.body, {abortEarly:false, convert:false})
    if(!result.error){
        next()
    } else {
        res.status(400).send("Login failed. You must specify email and password")
        log.warn("User login couldn't be validated")
    }
}

module.exports = {
    validateUser,
    validateLoginRequest
}
