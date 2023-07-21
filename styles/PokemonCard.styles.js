// PokemonCard.styles.js Datei

import styled from 'styled-components';

export const Title = styled.h1`
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin: 5% 0;
`;

export const CardWrapper = styled.div`
  width: 30%;
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
  padding-top: 0%;
  margin: 1%; /* Erhöhter Abstand zu den Karten an den Seiten */
  margin-bottom: -10%;
  margin-top: 0%;

  @media (max-width: 768px) {
    width: 100%; /* Ändert die Breite der Karten auf kleineren Bildschirmen */
    margin: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    padding-top: 0;
  }

  @media (max-width: 576px) {
    width: 100%; /* Ändert die Breite der Karten auf noch kleineren Bildschirmen */
    margin: 0;
    margin-bottom: 0;
    margin-top: 0;
    padding: 0;
    padding-top: 0;
  }
`;

export const PokemonImage = styled.div`
  width: 100%;
  padding-top: 20%;
  display: flex;
  justify-content: center;
  border-radius: 80%;
  //box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.1);
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

export const PokemonNumber = styled.span`
  font-size: 70%;
  font-weight: bold;
  margin-top: 8%;
`;

export const PokemonName = styled.h3`
  font-size: 100%;
  font-weight: bold;
  margin-top: 16%;
  text-transform: capitalize;
  color: #333333;
`;

export const PokemonTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8%;
`;

export const PokemonType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4%;
  margin-bottom: 4%;
  padding: 8% 12%;
  border-radius: 20%;
  background-color: #e35c5c;
  font-size: 14%;
  text-transform: capitalize;
  color: #f5f5f5;
`;
