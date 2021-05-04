const winston = require('winston');

const insertDate = winston.format((info) => {
    info.message = `${new Date().toISOString()} ${info.message}`
    return info
})

module.exports = winston.createLogger({
    transports: [
        new winston.transports.Console({
            level:'debug',
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        new winston.transports.File({
            level: 'info',
            handleExceptions: true,
            format: winston.format.combine(
                insertDate(),
               winston.format.simple()
            ), 
            maxsize: 5120000, //5Mb
            maxFiles:5,
            filename: `${__dirname}/../logs/aplication-logs.log`
        })
    ]
});