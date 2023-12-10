

const buildMakePerson=({ uuidv4, getAge})=>{
    return ({ name, birthdate })=>{
        return {
            id: uuidv4(),
            name:name,
            birthdate:birthdate,
            age: getAge(birthdate),
        }
    }
}

// const obj={
//     name:"Jhon", 
//     birthdate:"1979-10-27"
// }

// const jhon = buildPerson(obj);

// console.log(jhon);

module.exports={
 buildMakePerson,   
}