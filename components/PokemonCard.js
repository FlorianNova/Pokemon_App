import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';

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

export default function PokemonCard({ name, number, imageUrl, handleToggleSelectedPokemon }) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString ? JSON.parse(selectedPokemonString) : [];
    const isSelected = selectedPokemon.some((p) => p.number === number);
    setSelected(isSelected);
  }, [number]);

  const handleToggleSelect = () => {
    const selectedPokemonString = localStorage.getItem('selectedPokemon');
    const selectedPokemon = selectedPokemonString ? JSON.parse(selectedPokemonString) : [];

    if (selected) {
      setSelected(false);
      const updatedSelectedPokemon = selectedPokemon.filter((p) => p.number !== number);
      localStorage.setItem('selectedPokemon', JSON.stringify(updatedSelectedPokemon));
    } else if (selectedPokemon.length < 6) {
      setSelected(true);
      const updatedSelectedPokemon = [
        ...selectedPokemon,
        { name, number, imageUrl, id: Date.now() },
      ];
      localStorage.setItem('selectedPokemon', JSON.stringify(updatedSelectedPokemon));
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