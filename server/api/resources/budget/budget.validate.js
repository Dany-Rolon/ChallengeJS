const Joi = require('joi')
const log = require('../../../utils/logger')

const bluePrintBudget = Joi.object({
    concept: Joi.string().max(20).required(),
    mount: Joi.number().positive().required(),
    date: Joi.string().required(),
    category: Joi.string().valid('food', 'entertainment', 'services', 'job', 'others'),
    type: Joi.string().valid('income', 'expense')            
})

const validateBudget = (req,res,next) => {
    const result = bluePrintBudget.validate(req.body, {abortEarly:false, convert:false})
    if(!result.error){
        next()
    } else {
        console.log(result.error.details)
        res.status(400).send('Invalid information for a budget')
    } 
}

module.exports = {
    validateBudget
}