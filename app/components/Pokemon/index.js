import React from 'react';
import PropTypes from 'prop-types'

import { ContainerWild, ContainerCatched, Info } from './styles'

export const PokemonWild = ({ id, sprite, catchedPokemonsIds, setCatchedPokemonsIds }) => {
  return (
    <ContainerWild 
      onClick={() => {
          if (catchedPokemonsIds.length < 6 ){
            setCatchedPokemonsIds(catchedPokemonsIds.concat(id))
          }
      }}>
      <img src={sprite}/>
    </ContainerWild>
  );
}
PokemonWild.propTypes = {
  id: PropTypes.number.isRequired,
  sprite: PropTypes.string.isRequired,
  catchedPokemonsIds: PropTypes.array.isRequired,
  setCatchedPokemonsIds: PropTypes.func.isRequired,
}

export const PokemonCatched = ({ id, name, type, sprite, catchedPokemonsIds, setCatchedPokemonsIds }) => {
  return (
    <ContainerCatched 
      onClick={() => setCatchedPokemonsIds(catchedPokemonsIds.filter(catchedId => catchedId !== id))}>
      <img src={sprite}/>
      <Info>
        <div>ID: {id}</div>
        <div>Name: {name}</div>
        <div>Type: {type}</div>
      </Info>
    </ContainerCatched>
  );
}
PokemonCatched.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  sprite: PropTypes.string.isRequired,
  catchedPokemonsIds: PropTypes.array.isRequired,
  setCatchedPokemonsIds: PropTypes.func.isRequired,
}