import React from 'react';
import styled from 'styled-components';
import { compareTypes, getEffectivenessText } from './typeUtils';

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

const TypeComparison = ({ attackerType, defenderType, onClose }) => {
  return (
    <PopupWrapper>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>{attackerType} effectiveness against {defenderType}:</h3>
        <p>
          {getEffectivenessText(
            compareTypes(attackerType, defenderType),
            attackerType,
            defenderType
          )}
        </p>
      </PopupContent>
    </PopupWrapper>
  );
};

export default TypeComparison;
