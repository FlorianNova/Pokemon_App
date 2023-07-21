import * as Styled from '../styles/PokemonCard.styles';

const PokemonCard = ({ name, number, imageUrl, types }) => {
  return (
    <Styled.CardWrapper>
      <Styled.PokemonImage>
        <img src={imageUrl} alt={name} />
      </Styled.PokemonImage>
      <Styled.PokemonNumber>{`#${number}`}</Styled.PokemonNumber>
      <Styled.PokemonName>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Styled.PokemonName>
      <Styled.PokemonTypes>
        {types.map((type, index) => (
          <Styled.PokemonType key={index}>{type}</Styled.PokemonType>
        ))}
      </Styled.PokemonTypes>
    </Styled.CardWrapper>
  );
};

export default PokemonCard;
