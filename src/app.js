const { uuidv4, getAge} = require('./plugins');

// const {emailTemplate}=require('./js-foundation/template');

// require('./js-foundation/destructuring');
// console.log(emailTemplate);

// const {getUserById} = require('./js-foundation/callbacks');

// const {getUserById} = require('./js-foundation/arrows');

// const id=1;
// getUserById(id, (error, user)=>{
//     if (error){
//         throw new Error(error);
//     }
//       console.log(user);  
    
// });



// // console.log(emailTemplate);
const {buildMakePerson} = require('./js-foundation/factory');

const makePerson = buildMakePerson( {uuidv4, getAge});

const obj={
    name:'jhon',
    birthdate:'1979-10-27'
};

const jhon=makePerson(obj);

console.log(jhon);
