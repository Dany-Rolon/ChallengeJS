const log = require('../../../utils/logger')
const {Budget} = require('../../../db/db')

async function createBudget(item, userID){
    const newBudget = await Budget.create({
        ...item,
        user_id: userID
    })
    return newBudget
}

async function getBudgets(userID){
    const result = await Budget.findAll({where:{user_id : userID}})
    return result
}

async function editBudget(id, item){
    await Budget.update(
        {...item},
        {where: {id}}
    ).then(result => {
        return result
    }).catch(err => {
        log.info(err)
    })
}

async function deleteBudget(id){
    Budget.destroy({
        where:{
            id
        }
    })
}

module.exports = {
    createBudget,
    getBudgets,
    editBudget,
    deleteBudget
}