import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, compareTypes, types } from './typeUtils';
import TypeComparison from './TypeComparison';

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

const PopupContent = styled.div`
  position: relative;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #ddd;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow-y: auto;
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

const typeToColor = {};
Object.keys(types).forEach((type) => {
  typeToColor[type] = colors[type];
});

const TypeButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  ${(props) => {
    switch (props.type) {
      case 'normal':
        return `background-color: #A8A77A;`;
      case 'fire':
        return `background-color: #EE8130;`;
      case 'water':
        return `background-color: #6390F0;`;
      case 'electric':
        return `background-color: #F7D02C;`;
      case 'grass':
        return `background-color: #7AC74C;`;
      case 'ice':
        return `background-color: #96D9D6;`;
      case 'fighting':
        return `background-color: #C22E28;`;
      case 'poison':
        return `background-color: #A33EA1;`;
      case 'ground':
        return `background-color: #E2BF65;`;
      case 'flying':
        return `background-color: #A98FF3;`;
      case 'psychic':
        return `background-color: #F95587;`;
      case 'bug':
        return `background-color: #A6B91A;`;
      case 'rock':
        return `background-color: #B6A136;`;
      case 'ghost':
        return `background-color: #735797;`;
      case 'dragon':
        return `background-color: #6F35FC;`;
      case 'dark':
        return `background-color: #705746;`;
      case 'steel':
        return `background-color: #B7B7CE;`;
      case 'fairy':
        return `background-color: #D685AD;`;
      default:
        return `background-color: transparent;`;
    }
  }}
`;

export default function BattleSimulator() {
  const [attackerType, setAttackerType] = useState(null);
  const [defenderType, setDefenderType] = useState(null);
  const [showComparisonPopup, setShowComparisonPopup] = useState(false);

  const handleTypeClick = (type) => {
    if (!attackerType) {
      setAttackerType(type);
    } else if (!defenderType) {
      setDefenderType(type);
    }

    if (attackerType && defenderType) {
      setShowComparisonPopup(true);
    }
  };

  const handleCloseComparisonPopup = () => {
    setShowComparisonPopup(false);
    setAttackerType(null);
    setDefenderType(null);
  };

  return (
    <div>
      {showComparisonPopup && (
        <TypeComparison
          attackerType={attackerType}
          defenderType={defenderType}
          onClose={handleCloseComparisonPopup}
        />
      )}
      {!showComparisonPopup && (
        <PopupWrapper>
          <PopupContent>
            <CloseButton onClick={() => setShowComparisonPopup(false)}>X</CloseButton>
            <h2>Select two Types:</h2>
            <p>Please select the Attacking Type first and then the Defending Type.</p>
            <div>
              <TypeButton type="normal" onClick={() => handleTypeClick('normal')}>Normal</TypeButton>
              <TypeButton type="fire" onClick={() => handleTypeClick('fire')}>Fire</TypeButton>
              <TypeButton type="water" onClick={() => handleTypeClick('water')}>Water</TypeButton>
              <TypeButton type="electric" onClick={() => handleTypeClick('electric')}>Electric</TypeButton>
              <TypeButton type="grass" onClick={() => handleTypeClick('grass')}>Grass</TypeButton>
              <TypeButton type="ice" onClick={() => handleTypeClick('ice')}>Ice</TypeButton>
              <TypeButton type="fighting" onClick={() => handleTypeClick('fighting')}>Fighting</TypeButton>
              <TypeButton type="poison" onClick={() => handleTypeClick('poison')}>Poison</TypeButton>
              <TypeButton type="ground" onClick={() => handleTypeClick('ground')}>Ground</TypeButton>
              <TypeButton type="flying" onClick={() => handleTypeClick('flying')}>Flying</TypeButton>
              <TypeButton type="psychic" onClick={() => handleTypeClick('psychic')}>Psychic</TypeButton>
              <TypeButton type="bug" onClick={() => handleTypeClick('bug')}>Bug</TypeButton>
              <TypeButton type="rock" onClick={() => handleTypeClick('rock')}>Rock</TypeButton>
              <TypeButton type="ghost" onClick={() => handleTypeClick('ghost')}>Ghost</TypeButton>
              <TypeButton type="dragon" onClick={() => handleTypeClick('dragon')}>Dragon</TypeButton>
              <TypeButton type="dark" onClick={() => handleTypeClick('dark')}>Dark</TypeButton>
              <TypeButton type="steel" onClick={() => handleTypeClick('steel')}>Steel</TypeButton>
              <TypeButton type="fairy" onClick={() => handleTypeClick('fairy')}>Fairy</TypeButton>
            </div>
          </PopupContent>
        </PopupWrapper>
      )}
    </div>
  );
}
