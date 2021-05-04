const express = require('express')
const log = require('./utils/logger')
const app = express()
const cors = require('cors')

const UserRoute = require('./api/resources/user/user.routes')

require('./db/connection')

app.use(cors())
app.use(express.json())

app.use('/user', UserRoute)

app.listen(4000, () => {
    log.info('Server runing on port 4000')
})