const express = require('express')
const log = require('./utils/logger')
const mysql = require('mysql')

const app = express()

app.get('/createdb', (req,res) => {
    let sql = 'CREATE DATABASE mybadgets'
    db.query(sql, (err,result) => {
        if(err) log.error(err)
        res.send('Database created')
        console.log(result)
    })
})

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'',
})

db.connect((err) => {
    if(err) log.error(err)
    log.info("Connected!")
})

app.listen(4000, () => {
    log.info('Server runing on port 4000')
})