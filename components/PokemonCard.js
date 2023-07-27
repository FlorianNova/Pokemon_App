import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  border: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: rgb(243, 243, 243);
  background-image: linear-gradient(to bottom, #fcfcfc, #f5f5f5);
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 10%;
  margin: 1%;
  margin-bottom: -10%;
  margin-top: 1%;

  ${(props) =>
    props.selected &&
    css`
      border: 4px solid #00ff00;
      box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.1);
    `}

  @media (max-width: 3840px) {
    width: 100%;
  }
`;

const PokemonImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 80%;
`;

const PokemonNumber = styled.span`
  font-size: min(3vw, 20px);
  font-weight: bold;
  margin-top: 8%;
`;

const PokemonName = styled.h3`
  font-size: min(4vw, 20px);
  font-weight: bold;
  margin-top: 16%;
  text-transform: capitalize;
  color: #333333;
`;

export default function PokemonCard({ name, number, imageUrl }) {
  const [selected, setSelected] = useState(false);
  const [selectedPokemonCount, setSelectedPokemonCount] = useState(0);

  useEffect(() => {
    // Get the currently selected Pokémon from local storage
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString ? JSON.parse(selectedPokemonString) : [];

    // Set the initial selected Pokémon count based on local storage data
    setSelectedPokemonCount(selectedPokemon.length);

    // Check if the current Pokémon is in the selected Pokémon list
    const isSelected = selectedPokemon.some((pokemon) => pokemon.number === number);
    setSelected(isSelected);
  }, [number]);

  const handleToggleSelect = () => {
    // Get the currently selected Pokémon from local storage
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString ? JSON.parse(selectedPokemonString) : [];

    // Check if the selected Pokémon count is less than 6, and if the current Pokémon is not already selected
    if (selectedPokemon.length < 6 && !selected) {
      setSelected(true);

      // Add the current Pokémon to the selectedPokémon array and update local storage
      const updatedSelectedPokemon = [...selectedPokemon, { name, number, imageUrl }];
      localStorage.setItem('selectedPokemon', JSON.stringify(updatedSelectedPokemon));

      // Update the selected Pokémon count
      setSelectedPokemonCount((prevCount) => prevCount + 1);
    } else if (selected) {
      setSelected(false);

      // Remove the current Pokémon from the selectedPokémon array and update local storage
      const updatedSelectedPokemon = selectedPokemon.filter((pokemon) => pokemon.number !== number);
      localStorage.setItem('selectedPokemon', JSON.stringify(updatedSelectedPokemon));

      // Update the selected Pokémon count
      setSelectedPokemonCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <CardWrapper selected={selected} onClick={handleToggleSelect}>
      <PokemonImage imageUrl={imageUrl}>
        <Image src={imageUrl} alt={name} layout="fill" objectFit="contain" priority />
      </PokemonImage>
      <PokemonNumber>{`#${number}`}</PokemonNumber>
      <PokemonName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokemonName>
    </CardWrapper>
  );
}
