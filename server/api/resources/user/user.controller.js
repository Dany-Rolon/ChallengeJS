const db = require('../../../db/connection')
const log = require('../../../utils/logger')

function createUser(email, password) {
    const query = "INSERT INTO USERS (email, password) VALUES (?, ?)"
    db.query(query, [email, password], (err, result) => {
        if (err) throw err
        log.info('User created')
    })
}

function userExist(email) {
    const query = "SELECT email from users WHERE email=?"
    let res
    db.query(query, [email], function(err,result){
        if(err) {throw err} else {
            res = result
        } 
    })
    console.log(res)
}

//Just for testing
function getUsers() {
    const query = "SELECT * FROM users"
    db.query(query, (err, result) => {
        if (err) throw err
        return result
    })
}

module.exports = {
    createUser,
    getUsers,
    userExist
}