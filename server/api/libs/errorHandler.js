const log = require('../../utils/logger')

exports.procesarErrores = (fn) => {
    return function(req,res,next){
        fn(req,res,next).catch((err) => {
            log.error(err)
        })
    }
}