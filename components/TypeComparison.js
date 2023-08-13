import React from 'react';
import styled from 'styled-components';
import { compareTypes, getEffectivenessText } from './typeUtils'; 
import {StyledImage} from './PokemonList';
import {CloseButton} from './BattleSimulator';

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

const TypeComparison = ({ attackerType, defenderType, onClose }) => {
  const formattedAttackerType = attackerType.charAt(0).toUpperCase() + attackerType.slice(1);
  const formattedDefenderType = defenderType.charAt(0).toUpperCase() + defenderType.slice(1);

  return (
    <PopupWrapper>
      <PopupContent>
        <CloseButton onClick={onClose}>X</CloseButton>
        <h3>{formattedAttackerType} <StyledImage alt='' src='/versus.png'/> {formattedDefenderType}:</h3>
        <p>
          {getEffectivenessText(
            compareTypes(attackerType, defenderType),
            formattedAttackerType,
            formattedDefenderType
          )}
        </p>
      </PopupContent>
    </PopupWrapper>
  );
};

export default TypeComparison;
