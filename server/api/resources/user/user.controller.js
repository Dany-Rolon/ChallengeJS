const log = require('../../../utils/logger')
const {User} = require('../../../db/db')

async function createUser(email, hashedPassword){
    const newUser = await User.create({email:email, password:hashedPassword})
    return newUser
}

async function getUser({email,id}){
    if(email){
        const user = await User.findOne({where:{email: email}})
        return user
    }
    if(id){
        const user = await User.findOne({where:{id: id}})
        return user
    }
}

async function userExist(email){
    const user = await User.findOne({where:{email: email}})
    if(user){
        return true
    } else {
        return false
    }
}

module.exports={
    createUser,
    userExist,
    getUser
}