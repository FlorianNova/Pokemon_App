import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { typeToColor } from './typeUtils';

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
  padding: 10px;
  margin: 1px;
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
        cursor: pointer;
      `}
  }
`;

const PokemonImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 80%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

const PokemonDetails = styled.div`
  padding: 1px;
  text-align: left;
  font-size: min(4vw, 20px);
  border: 1px solid #ddd;
  border: none;
  margin-top: 1px;
`;

const PokemonDetailItem = styled.div`
  margin-top: 1px;
  padding: 1px;
`;

const PokemonStats = styled.div`
  margin-top: 2px;
`;

const PokemonStat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1px;
  padding: 1px;
`;

export default function PokemonCard({
  name,
  number,
  imageUrl,
}) {
  const [expanded, setExpanded] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error('Error fetching Pokemon-Details:', error);
      }
    };

    fetchPokemonDetails();
  }, [name]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <CardWrapper onClick={handleToggleExpand} expanded={expanded}>
      <PokemonImage imageUrl={imageUrl}>
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="contain"
          priority
          sizes="(max-width: 300px) 100vw, 50vw"
        />
      </PokemonImage>
      <PokemonNumber>{`#${number}`}</PokemonNumber>
      <PokemonName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokemonName>
      {expanded && (
        <PokemonDetails>
          <PokemonDetailItem>
            <strong>Type:</strong>
            <PokemonTypesWrapper>
              {pokemonDetails?.types.map((type) => (
                <PokemonType key={type.type.name} type={type.type.name}>
                  {type.type.name}
                </PokemonType>
              ))}
            </PokemonTypesWrapper>
          </PokemonDetailItem>
          <PokemonDetailItem>
            <strong>Abilities:</strong>{' '}
            {pokemonDetails?.abilities.map((ability) => (
              <span key={ability.ability.name}>{ability.ability.name}</span>
            ))}
          </PokemonDetailItem>
          <PokemonDetailItem>
            <strong>Height:</strong> {pokemonDetails?.height}
          </PokemonDetailItem>
          <PokemonDetailItem>
            <strong>Weight:</strong> {pokemonDetails?.weight}
          </PokemonDetailItem>
          <PokemonStats>
            <strong>Base Stats:</strong>
            {pokemonDetails?.stats.map((stat) => (
              <PokemonStat key={stat.stat.name}>
                <span>{stat.stat.name}:</span>
                <span>{stat.base_stat}</span>
              </PokemonStat>
            ))}
          </PokemonStats>
        </PokemonDetails>
      )}
    </CardWrapper>
  );
}