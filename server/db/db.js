const {Sequelize} = require('sequelize')
const UserModel = require('../api/resources/user/user.model')
const log = require('../utils/logger')

const sequelize = new Sequelize('s6RGVxTaNq', 's6RGVxTaNq', 'ThXybOP1dN', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

const User = UserModel(sequelize, Sequelize)

async function AutheticateConnection(){
    try {
        await sequelize.authenticate();
        log.info('Connection has been established successfully.');
    }   catch (error) {
        log.error('Unable to connect to the database:', error);
    }
}
AutheticateConnection()

sequelize.sync({force:false})
    .then(() => {
        log.info('Synchronized tables')
    })

module.exports={
    User
}