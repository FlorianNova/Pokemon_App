import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import fetchPokemonData from '../services/fetchPokemonData';
import styled from 'styled-components';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  @media (max-width: 384px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const SearchBar = styled.input`
  width: 50vw;
  padding: 12px;
  font-size: 2vw;
  border: 3px solid #ddd;
  border-radius: 20px;
  margin-bottom: 16px;
  display: block;
  margin: 0 auto;
  margin-bottom: 7%;
  background-color: #


  @media (max-width: 3840px) {
    width: 60vw;
  }
`;



export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
    );
  });

  return (
    <div>
      <SearchBar
        type="text"
        placeholder="Search by name or number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GridWrapper>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            number={pokemon.id}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          />
        ))}
      </GridWrapper>
    </div>
  );
}