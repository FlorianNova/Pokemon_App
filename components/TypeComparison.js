import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, compareTypes, types } from './typeUtils';

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

const TypeButton = styled.button`
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => colors[props.type]};
  color: white;
  cursor: pointer;
`;

export default function BattleSimulator() {
  const [selectedType, setSelectedType] = useState(null);
  const [showTypePopup, setShowTypePopup] = useState(false);
  const [showEffectivenessPopup, setShowEffectivenessPopup] = useState(false);

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setShowTypePopup(false);
    setShowEffectivenessPopup(true);
  };

  const handleCompareClick = () => {
    setShowTypePopup(true);
  };

  return (
    <div>
      <button onClick={handleCompareClick}>Compare Pokemon</button>
      {showTypePopup && (
        <PopupWrapper>
          <PopupContent>
            <CloseButton onClick={() => setShowTypePopup(false)}>X</CloseButton>
            <h1>Select a Pokemon Type</h1>
            {types.map((type) => (
              <TypeButton
                key={type}
                type={type}
                onClick={() => handleTypeClick(type)}
              >
                {type}
              </TypeButton>
            ))}
          </PopupContent>
        </PopupWrapper>
      )}
      {showEffectivenessPopup && (
        <PopupWrapper>
          <PopupContent>
            <CloseButton onClick={() => setShowEffectivenessPopup(false)}>
              X
            </CloseButton>
            <h1>Effectiveness Against Other Types</h1>
            {types.map((otherType) => (
              <p key={otherType}>
                {otherType}: {compareTypes(selectedType, otherType)}
              </p>
            ))}
          </PopupContent>
        </PopupWrapper>
      )}
    </div>
  );
}
