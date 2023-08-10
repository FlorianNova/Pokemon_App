import styled from 'styled-components';

const types = {
  normal: { weak: ['fighting'], resist: ['ghost'] },
  fighting: {
    weak: ['flying', 'psychic', 'fairy'],
    resist: ['rock', 'bug', 'dark'],
  },
  flying: {
    weak: ['rock', 'electric', 'ice'],
    resist: ['fighting', 'ground', 'grass', 'bug'],
  },
  poison: {
    weak: ['ground', 'psychic'],
    resist: ['fighting', 'poison', 'grass', 'fairy'],
  },
  ground: {
    weak: ['water', 'grass', 'ice'],
    resist: ['poison', 'rock', 'electric'],
  },
  rock: {
    weak: ['fighting', 'ground', 'steel', 'water', 'grass'],
    resist: ['normal', 'flying', 'poison', 'fire'],
  },
  bug: {
    weak: ['flying', 'rock', 'fire'],
    resist: ['fighting', 'ground', 'grass'],
  },
  ghost: {
    weak: ['ghost', 'dark'],
    resist: ['normal', 'fighting', 'poison', 'bug'],
  },
  steel: {
    weak: ['fighting', 'ground', 'fire'],
    resist: [
      'normal',
      'flying',
      'rock',
      'bug',
      'steel',
      'grass',
      'psychic',
      'ice',
      'dragon',
      'fairy',
    ],
  },
  fire: {
    weak: ['ground', 'rock', 'water'],
    resist: ['bug', 'steel', 'fire', 'grass', 'ice'],
  },
  water: {
    weak: ['grass', 'electric'],
    resist: ['steel', 'fire', 'water', 'ice'],
  },
  grass: {
    weak: ['flying', 'poison', 'bug', 'fire', 'ice'],
    resist: ['ground', 'water', 'grass', 'electric'],
  },
  electric: { weak: ['ground'], resist: ['flying', 'steel', 'electric'] },
  psychic: { weak: ['bug', 'ghost', 'dark'], resist: ['fighting', 'psychic'] },
  ice: { weak: ['fighting', 'rock', 'steel', 'fire'], resist: ['ice'] },
  dragon: {
    weak: ['ice', 'dragon', 'fairy'],
    resist: ['fire', 'water', 'grass', 'electric'],
  },
  dark: { weak: ['fighting', 'bug', 'fairy'], resist: ['ghost', 'dark'] },
  fairy: { weak: ['poison', 'steel'], resist: ['fighting', 'bug', 'dragon'] },
};

const effectiveness = {
  superEffective: 2,
  veryEffective: 1,
  normalEffective: 0.5,
  notVeryEffective: 0.25,
  noEffect: 0,
};

const colors = {
  superEffective: '#ff0000',
  veryEffective: '#ff6600',
  normalEffective: '#ffff00',
  notVeryEffective: '#99cc00',
  noEffect: '#00ff00',
};

const EffectivenessText = styled.p`
  color: ${(props) => colors[props.effectiveness]};
`;

export default function PokemonTypeCompareDisplay({ pokemon1, pokemon2 }) {
  const compareTypes = (type1, type2) => {
    if (type1 === type2) return effectiveness.normalEffective;
    if (types[type1].weak.includes(type2)) return effectiveness.superEffective;
    if (types[type1].resist.includes(type2))
      return effectiveness.notVeryEffective;
    return effectiveness.veryEffective;
  };

  const pokemonTypeCompare = (pokemon1, pokemon2) => {
    // Get the types of each pokemon from the pokemon database
    const pokemon1Types = getPokemonTypes(pokemon1); // For example, getPokemonTypes('Pikachu') returns ['electric']
    const pokemon2Types = getPokemonTypes(pokemon2); // For example, getPokemonTypes('Charizard') returns ['fire','flying']

    // Initialize the effectiveness of each pokemon as 1
    let pokemon1Effectiveness = 1;
    let pokemon2Effectiveness = 1;

    // Loop through the types of each pokemon and multiply the effectiveness by the result of compareTypes function
    for (let type1 of pokemon1Types) {
      for (let type2 of pokemon2Types) {
        pokemon1Effectiveness *= compareTypes(type1, type2);
        pokemon2Effectiveness *= compareTypes(type2, type1);
      }
    }

    // Return an object with the effectiveness of each pokemon
    return {
      pokemon1Effectiveness,
      pokemon2Effectiveness,
    };
  };

  const getEffectivenessText = (effectiveness) => {
    switch (effectiveness) {
      case effectiveness.superEffective:
        return 'Super effective!';
      case effectiveness.veryEffective:
        return 'Very effective!';
      case effectiveness.normalEffective:
        return 'Normal effective';
      case effectiveness.notVeryEffective:
        return 'Not very effective...';
      case effectiveness.noEffect:
        return 'No effect';
      default:
        return 'Unknown';
    }
  };

  const { pokemon1Effectiveness, pokemon2Effectiveness } = pokemonTypeCompare(
    pokemon1,
    pokemon2
  );

  return (
    <div>
      <h1>Pokémon Type Compare</h1>
      <h2>
        {pokemon1} vs {pokemon2}
      </h2>
      <p>
        The Type of {pokemon1} is {getEffectivenessText(pokemon1Effectiveness)}{' '}
        against {pokemon2}.
      </p>
      <EffectivenessText
        effectiveness={getEffectivenessText(pokemon1Effectiveness)}
      >
        {pokemon1Effectiveness}
      </EffectivenessText>
      <p>
        The Type of {pokemon2} is {getEffectivenessText(pokemon2Effectiveness)}{' '}
        against {pokemon1}.
      </p>
      <EffectivenessText
        effectiveness={getEffectivenessText(pokemon2Effectiveness)}
      >
        {pokemon2Effectiveness}
      </EffectivenessText>
    </div>
  );
}
