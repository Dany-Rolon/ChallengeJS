const log = require('./../../utils/logger')
const passportJWT = require('passport-jwt')
const userController = require('./../resources/user/user.controller')

let jwtOptions = {
    secretOrKey: 'mybudgetSecret',
    jwtFromRequest: passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = new passportJWT.Strategy(jwtOptions, async(jwtPayload, next) => {
    try {
        let user = await userController.getUser({id: jwtPayload.id})
        if(!user){
            log.warn('Invalid JWT Token')
            next(null, false)
            return
        }
        log.info(`Valid token. Authentication complete`)
        next(null,{
            user: user.email,
            id: user.id
        })
    } catch (error) {
        log.error(`Error happened trying to authenticate ${error}`)
        next(error)
    }
})