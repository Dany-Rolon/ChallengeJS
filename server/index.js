const express = require('express')
const log = require('./utils/logger')
const app = express()
const cors = require('cors')
const passport = require('passport')
const authJWT = require('./api/libs/auth')

const UserRoute = require('./api/resources/user/user.routes')
const BudgetRoute = require('./api/resources/budget/budget.routes')

const PORT = 4000 || process.env.port

//Connection to DB
require('./db/db')

app.use(cors())
app.use(express.json())

passport.use(authJWT)
app.use(passport.initialize())

//Routes
app.use('/user', UserRoute)
app.use('/budget', BudgetRoute)

app.listen(PORT, () => {
    log.info(`Server running on port ${PORT}`)
})