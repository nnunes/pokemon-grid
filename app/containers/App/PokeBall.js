import React, { useEffect, useState } from 'react';

import { fetchPokemon } from '../../actions/query'

import PokemonLists from '../../components/PokemonLists'


const PokeBall = () => {

  const [catchedPokemonsIds, setCatchedPokemonsIds] = useState([])
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const timer = setTimeout(() => {
      const numberLoaded = pokemons.length
      console.log(numberLoaded)

      if (numberLoaded < 151) {
        fetchPokemon(numberLoaded + 1).then(data => setPokemons(pokemons.concat(data)))     
      } else {
        clearTimeout(timer)
      }

    }, 1000);
    return () => clearTimeout(timer);
  }, [pokemons]);

  return <PokemonLists pokemons={pokemons} catchedPokemonsIds={catchedPokemonsIds} setCatchedPokemonsIds={setCatchedPokemonsIds}/>
}
export default PokeBall;