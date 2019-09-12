import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { PokemonWild, PokemonCatched } from '../Pokemon';  

import messages from './messages';
import { Field, WildPokemonWrapper, CatchedPokemonWrapper, PokemonField } from './styles';

const PokemonLists = ({ pokemons, catchedPokemonsIds, setCatchedPokemonsIds}) => {
  return (
    <Field>
      <WildPokemonWrapper>
        <FormattedMessage {...messages.wildPokemons} />
        <PokemonField>
          {pokemons
            .filter(poke=> !catchedPokemonsIds.includes(poke.id))
            .map((pokemon) => 
              <PokemonWild
                key={pokemon.id}
                id={pokemon.id} 
                sprite={pokemon.sprite} 
                catchedPokemonsIds={catchedPokemonsIds}
                setCatchedPokemonsIds={setCatchedPokemonsIds}
              />
          )}
        </PokemonField>
      </WildPokemonWrapper>
      <CatchedPokemonWrapper>
          <FormattedMessage {...messages.catchedPokemons} />
          <PokemonField>
          {pokemons
            .filter(poke=> catchedPokemonsIds.includes(poke.id))
            .map((pokemon) => 
              <PokemonCatched
                key={pokemon.id}
                id={pokemon.id} 
                name={pokemon.name} 
                type={pokemon.type} 
                sprite={pokemon.sprite} 
                catchedPokemonsIds={catchedPokemonsIds}
                setCatchedPokemonsIds={setCatchedPokemonsIds}
              />
          )}
          </PokemonField>
      </CatchedPokemonWrapper>
    </Field>
  )
}
PokemonLists.propTypes = {
  pokemons: PropTypes.array.isRequired,
  catchedPokemonsIds: PropTypes.array.isRequired,
  setCatchedPokemonsIds: PropTypes.func.isRequired,
}
export default PokemonLists