import React from 'react';
import styled from 'styled-components';
import { compareTypes, getEffectivenessText } from './typeUtils'; 
import { StyledImage } from './PokemonList';
import { CloseButton } from './BattleSimulator';
import { typeToColor } from './typeUtils';

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
  const formattedAttackerType =
    attackerType.charAt(0).toUpperCase() + attackerType.slice(1);
  const formattedDefenderType =
    defenderType.charAt(0).toUpperCase() + defenderType.slice(1);

  const AttackerTypeText = styled.span`
    background-color: ${(props) => typeToColor[props.type]};
    color: white;
    padding: 7px 10px;
    border-radius: 5px;
    margin: 1%;
  `;

  const DefenderTypeText = styled.span`
    background-color: ${(props) => typeToColor[props.type]};
    color: white;
    padding: 7px 10px;
    border-radius: 5px;
    margin: 50%;
    right: auto;
  `;

  const VersusImage = styled.img`
    margin: 20px;
    width: 70%;
  `;

  return (
    <PopupWrapper>
      <PopupContent>
        <CloseButton onClick={onClose}> <StyledImage alt="" src="/leafeon.gif" /> </CloseButton>
        <h3>
          <AttackerTypeText type={attackerType}>{formattedAttackerType}</AttackerTypeText>
          <VersusImage alt='' src='/versus.png'/>
          <DefenderTypeText type={defenderType}>{formattedDefenderType}</DefenderTypeText>
        </h3>
        <div>
          {getEffectivenessText(
            compareTypes(attackerType, defenderType),
            formattedAttackerType,
            formattedDefenderType
          )}
        </div>
      </PopupContent>
    </PopupWrapper>
  );
};

export default TypeComparison;
