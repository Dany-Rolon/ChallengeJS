const {Budget} = require('../../../db/db')

async function createBudget(item, userID){
    const newBudget = await Budget.create({
        ...item,
        user_id: userID
    })
    return newBudget
}

module.exports = {
    createBudget
}