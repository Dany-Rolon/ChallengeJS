const express = require('express')
const passport = require('passport')
const errorHandler = require('../../libs/errorHandler').handleErrors

const bugdetRouter = express.Router()
const budgetController = require('./budget.controller')
const {validateBudget} = require('./budget.validate')

const jwtAuthenticate = passport.authenticate('jwt', {
    session:false
})

//Create budget route
bugdetRouter.post('/', [jwtAuthenticate,validateBudget], errorHandler(async(req,res) => {
    let newBudget = req.body
    let userID = req.user.id
    let response = await budgetController.createBudget(newBudget, userID)
    console.log(response)
}))

module.exports = bugdetRouter