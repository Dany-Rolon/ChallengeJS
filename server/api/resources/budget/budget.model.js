module.exports = (sequelize, type) => {
    return sequelize.define('budget', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id:{
            type: type.INTEGER,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        concept: type.STRING,
        mount: type.INTEGER,
        date: type.STRING,
        type: type.ENUM('income','expense'),
        category: type.ENUM('food', 'entertainment', 'services', 'job', 'others')
    })
}