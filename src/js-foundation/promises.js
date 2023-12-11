const {http} = require('../plugins');

const getPokemonById = async (id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemon= await http.get(url);

    // const resp= await fetch(url);
    // const pokemon = await resp.json();
    
    // throw new Error('Pokemon no existe');

    return pokemon.name;


    // return fetch(url)
    //     .then((response)=>response.json())
    //     .then((pokemon)=>pokemon.name)
    //     // .then((error)=>{throw new error('Error en aplicacion')})
}



module.exports=getPokemonById;