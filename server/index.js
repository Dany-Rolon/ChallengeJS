const express = require('express')
const log = require('./utils/logger')
const app = express()
const cors = require('cors')
const passport = require('passport')
const authJWT = require('./api/libs/auth')

const UserRoute = require('./api/resources/user/user.routes')

//Connection to DB
require('./db/db')

app.use(cors())
app.use(express.json())

passport.use(authJWT)
app.use(passport.initialize())

app.use('/user', UserRoute)

app.listen(4000, () => {
    log.info('Server runing on port 4000')
})