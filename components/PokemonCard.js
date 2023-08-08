import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

const typeToColor = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

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
      border: 2px solid black;
      box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
      transition: transform 0.3s ease;
    `}

  &:hover {
    ${(props) =>
      !props.selected &&
      css`
        box-shadow: 1px 10px 10px 1px rgba(0, 0, 0, 0.1);
        transform: scale(1.05);
        transition: transform 0.2s ease-in;
      `}
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
`;

const PokemonTypesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8px;
`;

const PokemonType = styled.span`
  background-color: ${(props) => typeToColor[props.type]};
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  margin: 4px;
`;

export default function PokemonCard({
  name,
  number,
  imageUrl,
  handleToggleSelectedPokemon,
}) {
  const [selected, setSelected] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${number}`
        );
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokemon-Details:', error);
      }
    };

    fetchPokemonDetails();
  }, [number]);

  useEffect(() => {
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString
      ? JSON.parse(selectedPokemonString)
      : [];
    const isSelected = selectedPokemon.some((p) => p.number === number);
    setSelected(isSelected);
  }, [number]);

  const handleToggleSelect = () => {
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString
      ? JSON.parse(selectedPokemonString)
      : [];

    if (selected) {
      setSelected(false);
      const updatedSelectedPokemon = selectedPokemon.filter(
        (p) => p.number !== number
      );
      localStorage.setItem(
        'selectedPokemon',
        JSON.stringify(updatedSelectedPokemon)
      );
    } else if (selectedPokemon.length < 6) {
      setSelected(true);
      const updatedSelectedPokemon = [
        ...selectedPokemon,
        { name, number, imageUrl, id: Date.now() },
      ];
      localStorage.setItem(
        'selectedPokemon',
        JSON.stringify(updatedSelectedPokemon)
      );
    }
  };

  return (
    <CardWrapper selected={selected} onClick={handleToggleSelect}>
      <PokemonImage imageUrl={imageUrl}>
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority
        />
      </PokemonImage>
      <PokemonNumber>{`#${number}`}</PokemonNumber>
      <PokemonName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokemonName>
      <PokemonTypesWrapper>
        {pokemonDetails &&
          pokemonDetails.types.map((type) => (
            <PokemonType key={type.type.name} type={type.type.name}>
              {type.type.name}
            </PokemonType>
          ))}
      </PokemonTypesWrapper>
    </CardWrapper>
  );
}
