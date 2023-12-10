const {v4:uuidv4Plugin}=require('uuid');

const uuidv4=()=>{
    return uuidv4Plugin();
}

module.exports={
    uuidv4,
}