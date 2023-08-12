import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, compareTypes, types, typeToColor } from './typeUtils';
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
  font-weight: bold;
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
  font-weight: bold;
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



const TypeButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  ${(props) => {
    return `background-color: ${typeToColor[props.type]}`;
  }}
`;

export default function BattleSimulator({handleModal}) {
  const [attackerType, setAttackerType] = useState(null);
  const [defenderType, setDefenderType] = useState(null);
  const [showComparisonPopup, setShowComparisonPopup] = useState(false);

  const handleTypeClick = (type) => {
    if (!attackerType) {
      setAttackerType(type);
      return
    }
   
    setDefenderType(type);
    setShowComparisonPopup(true);
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
            <CloseButton onClick={() => handleModal()}>X</CloseButton>
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
