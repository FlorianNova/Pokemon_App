import React, { useEffect, useState } from 'react';
import * as Styled from '../styles/PokemonList.styles';
import PokemonCard from './PokemonCard';
import fetchPokemonData from '../services/fetchPokemonData';

const PokemonList = () => {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await fetchPokemonData();
      setPokemonData(data);
    };
    fetchPokemon();
  }, []);

  return (
    <Styled.GridWrapper>
      {pokemonData.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          number={index + 1}
          imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
          types={pokemon.types || []} // Sicherstellen, dass types ein Array ist oder ein leeres Array verwenden für zukünftiges von Pokemon Typen
        />
      ))}
    </Styled.GridWrapper>
  );
};

export default PokemonList;
