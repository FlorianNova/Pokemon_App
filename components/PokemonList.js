import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import fetchPokemonData from '../services/fetchPokemonData';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await fetchPokemonData();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
    fetchPokemon();
  }, []);

  return (
    <GridWrapper>
      {pokemonData.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          number={pokemon.id}
          imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        />
      ))}
    </GridWrapper>
  );
}
