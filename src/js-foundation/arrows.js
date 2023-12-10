const users=[
    {
        id:1,
        name:'Jhon Doe'
    },
    {
        id:2,
        name: 'Jane Doe'
    }
]

getUserById = ( id, callback )=>{
    const user= users.find( user=>user.id==id);

    if (!user) callback(`User not found whit id: ${id}`,"");

    return callback(null, user);
}

module.exports={
    getUserById,
}
