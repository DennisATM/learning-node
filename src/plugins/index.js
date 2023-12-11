const {uuidv4} = require ('../plugins/getUUID');
const {getAge} = require('../plugins/getAge.plugin');
const {http} = require('../plugins/http-client-plugin');
const buildLogger = require('../plugins/loggerPlugin');


module.exports={
    uuidv4,
    getAge,
    http,
    buildLogger,

}
