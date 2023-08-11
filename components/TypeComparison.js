import React, { useState } from 'react';
import styled from 'styled-components';
import { colors, compareTypes, getEffectivenessText, types } from './typeUtils';

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

const TypeComparison = () => {
  const [selectedType, setSelectedType] = useState(null);

  const handleTypeClick = (type) => {
    setSelectedType(type);
  };

  return (
    <PopupWrapper>
      <PopupContent>
        <CloseButton onClick={() => setSelectedType(null)}>X</CloseButton>
        <h2>Select a Pokémon Type</h2>
        <div>
          {Object.keys(types).map((type, index) => (
            <TypeButton
              key={index}
              type={type}
              onClick={() => handleTypeClick(type)}
            >
              {type}
            </TypeButton>
          ))}
        </div>
        {selectedType && (
          <div>
            <h3>Effectiveness against {selectedType}:</h3>
            <ul>
              {Object.keys(types).map((type, index) => (
                <li key={index}>
                  {type}: {getEffectivenessText(compareTypes(selectedType, type))}
                </li>
              ))}
            </ul>
          </div>
        )}
      </PopupContent>
    </PopupWrapper>
  );
};

export default TypeComparison;
