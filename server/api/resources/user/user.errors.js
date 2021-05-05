class UserDataAlreadyInUse extends Error {
    constructor(message){
        super(message)
        this.message = message || 'The email is already associated with an account'
        this.status = 409
        this.name = 'UserDataAlreadyInUse'
    }
}

class WrongCredentials extends Error {
    constructor(message){
        super(message)
        this.message = message || 'Wrong credentials'
        this.status = 400
        this.name = 'WrongCredentials'
    }
}

module.exports = {
    UserDataAlreadyInUse,
    WrongCredentials
}