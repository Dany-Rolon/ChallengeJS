const log = require('../../utils/logger')

exports.handleErrors = (fn) => {
    return function(req,res,next){
        fn(req,res,next).catch((err) => {
            log.error(err)
        })
    }
}