import styled from 'styled-components';
import Image from 'next/image';

const CardWrapper = styled.div`
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
  padding-top: 1%;
  margin: 1%;
  margin-bottom: -10%;
  margin-top: 1%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PokemonImage = styled.div`
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

const PokemonNumber = styled.span`
  font-size: 70%;
  font-weight: bold;
  margin-top: 8%;
`;

const PokemonName = styled.h3`
  font-size: 100%;
  font-weight: bold;
  margin-top: 16%;
  text-transform: capitalize;
  color: #333333;
`;

const PokemonTypes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 8%;
`;

const PokemonType = styled.div`
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

export default function PokemonCard({ name, number, imageUrl }) {
  return (
    <CardWrapper>
      <div
        style={{
          width: '100%',
          paddingTop: '100%',
          borderRadius: '80%',
          overflow: 'hidden',
        }}
      >
        <Image src={imageUrl} alt={name} layout="fill" objectFit="cover" />
      </div>
      <PokemonNumber>{`#${number}`}</PokemonNumber>
      <PokemonName>{name.charAt(0).toUpperCase() + name.slice(1)}</PokemonName>
    </CardWrapper>
  );
}
