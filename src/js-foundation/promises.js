

const getPokemonById = (id)=>{
    const url=`https://pokeapi.co/api/v2/pokemon/${id}`;
    
    return fetch(url)
        .then((response)=>response.json())
        .then((pokemon)=>pokemon.name)
        // .then((error)=>{throw new error('Error en aplicacion')})
}



module.exports=getPokemonById;