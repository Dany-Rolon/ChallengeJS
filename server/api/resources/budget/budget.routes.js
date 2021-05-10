const express = require('express')
const log = require('../../../utils/logger')
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
    log.info(`A budget was created`)
    res.status(200).json(response).end()
}))

//Send users budgets route
bugdetRouter.get('/', jwtAuthenticate, errorHandler(async(req,res) => {
    let userID = req.user.id
    let result = await budgetController.getBudgets(userID)
    res.status(200).json(result)
}))

//Edit a budget route
bugdetRouter.put('/edit/:id', [jwtAuthenticate, validateBudget], errorHandler(async(req,res) => {
    let budgetID = req.params.id
    let editedBudget = req.body
    await budgetController.editBudget(budgetID,editedBudget)
    log.info(`Budget with id: ${budgetID} was edited`)
    res.status(200).send('Budget edited')
}))

//Delete a budget route
bugdetRouter.delete('/delete/:id', jwtAuthenticate, errorHandler(async (req,res) => {
    let budgetID = req.params.id
    await budgetController.deleteBudget(budgetID)
    res.status(200).send('The budget was deleted')
}))

module.exports = bugdetRouter