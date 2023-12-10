const {uuidv4,getAge}=require('../plugins');

const buildPerson=({name,birthdate})=>{
    return {
        id: uuidv4(),
        name:name,
        birthdate:getAge(birthdate),
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),
    }
}

const obj={
    name:"Jhon", 
    birthdate:"1979-10-27"
}

const jhon = buildPerson(obj);

console.log(jhon);