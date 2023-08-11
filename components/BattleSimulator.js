import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getEffectivenessText, colors, compareTypes } from './typeUtils';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-weight: bold;
  font-size: 20px;
`;

const PopupWrapper = styled.div`
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  position: relative;
  width: 80%;
  max-width: 500px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;

const BattleSimulatorWrapper = styled.div`
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #f5f5f5;
  text-align: center;
`;

const Result = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 10px;
`;

const EffectivenessText = styled.p`
  color: ${(props) => props.color};
`;

const getPokemonTypes = async (pokemonName) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    const data = await response.json();
    const types = data.types.map((type) => type.type.name);
    return types;
  } catch (error) {
    console.error('Error fetching Pokemon types:', error);
    return [];
  }
};

export default function BattleSimulator({ pokemon1, pokemon2 }) {
  const [showPopup, setShowPopup] = useState(false);
  const [result, setResult] = useState('');

  useEffect(() => {
    if (!pokemon1 || !pokemon2) {
      setShowPopup(true);
      setResult('Please select two Pokémon to compare.');
      return;
    }

    const pokemonTypeCompare = async (pokemon1, pokemon2) => {
      const pokemon1Types = await getPokemonTypes(pokemon1);
      const pokemon2Types = await getPokemonTypes(pokemon2);

      let pokemon1Effectiveness = 1;
      let pokemon2Effectiveness = 1;

      for (let type1 of pokemon1Types) {
        for (let type2 of pokemon2Types) {
          pokemon1Effectiveness *= compareTypes(type1, type2);
          pokemon2Effectiveness *= compareTypes(type2, type1);
        }
      }

      return {
        pokemon1Effectiveness,
        pokemon2Effectiveness,
      };
    };

    pokemonTypeCompare(pokemon1, pokemon2).then(
      ({ pokemon1Effectiveness, pokemon2Effectiveness }) => {
        setResult(
          <BattleSimulatorWrapper>
            <h1>Pokémon Type Compare</h1>
            <h2>
              {pokemon1} vs {pokemon2}
            </h2>
            <p>
              The Type of {pokemon1} is{' '}
              <EffectivenessText
                color={colors[getEffectivenessText(pokemon1Effectiveness)]}
              >
                {getEffectivenessText(pokemon1Effectiveness)}
              </EffectivenessText>{' '}
              against {pokemon2}.
            </p>
            <p>
              The Type of {pokemon2} is{' '}
              <EffectivenessText
                color={colors[getEffectivenessText(pokemon2Effectiveness)]}
              >
                {getEffectivenessText(pokemon2Effectiveness)}
              </EffectivenessText>{' '}
              against {pokemon1}.
            </p>
          </BattleSimulatorWrapper>
        );
        setShowPopup(true);
      }
    );
  }, [pokemon1, pokemon2]);

  return (
    <>
      {showPopup && (
        <PopupOverlay>
          <PopupWrapper>
            <CloseButton onClick={() => setShowPopup(false)}>X</CloseButton>
            {result}
          </PopupWrapper>
        </PopupOverlay>
      )}
    </>
  );
}