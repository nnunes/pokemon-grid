

export const fetchPokemon = ( id ) => 
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then((json) => {
            const data = {
                id: json.id,
                name: json.name,
                sprite: json.sprites.front_default,
                type: json.types[0].type.name,
            }
            return Promise.resolve(data)
        })