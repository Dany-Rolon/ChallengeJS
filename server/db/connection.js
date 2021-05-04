const mysql = require('mysql')
const log = require('../utils/logger')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mybudgets'
})

db.connect((err) => {
    if(err) log.error(err)
    log.info("Connected!")
})

module.exports = db