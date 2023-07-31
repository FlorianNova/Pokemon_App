import { useState, useEffect } from 'react';
import styled from 'styled-components';

const SavedPokemonWrapper = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-left: 21px;
  margin-right: 21px;
`;

const SavedPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const PokemonName = styled.h3`
  margin: 10px 0;
`;

const PokemonImage = styled.img`
  width: 100px;
  height: 100px;
`;

export default function SavedPokemonList() {
  const [savedPokemonList, setSavedPokemonList] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('selectedPokemonList')) || [];
    setSavedPokemonList(savedList);
  }, []);

  return (
    <div>
      <h2>Saved Pokemon List</h2>
      <SavedPokemonWrapper>
        {savedPokemonList.map((pokemon) => (
          <SavedPokemonCard key={pokemon.number}>
            <PokemonName>{pokemon.name}</PokemonName>
            <PokemonImage
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
              alt={pokemon.name}
            />
          </SavedPokemonCard>
        ))}
      </SavedPokemonWrapper>
    </div>
  );
}