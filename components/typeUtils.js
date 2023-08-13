export const types = {
  normal: {
    weak: ['fighting'],
    resist: [],
    immune: ['ghost'],
  },
  fighting: {
    weak: ['flying', 'psychic', 'fairy'],
    resist: ['bug', 'rock', 'dark'],
    immune: [],
  },
  flying: {
    weak: ['rock', 'electric', 'ice'],
    resist: ['fighting', 'bug', 'grass'],
    immune: ['ground'],
  },
  poison: {
    weak: ['ground', 'psychic'],
    resist: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
    immune: [],
  },
  ground: {
    weak: ['water', 'grass', 'ice'],
    resist: ['poison', 'rock', 'electric'],
    immune: ['electric'],
  },
  rock: {
    weak: ['fighting', 'ground', 'steel', 'water', 'grass'],
    resist: ['normal', 'flying', 'poison', 'fire'],
    immune: [],
  },
  bug: {
    weak: ['flying', 'rock', 'fire'],
    resist: ['fighting', 'ground', 'grass'],
    immune: [],
  },
  ghost: {
    weak: ['ghost', 'dark'],
    resist: ['poison', 'bug'],
    immune: ['normal', 'fighting'],
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
    immune: ['poison'],
  },
  fire: {
    weak: ['ground', 'rock', 'water'],
    resist: ['bug', 'steel', 'fire', 'grass', 'ice'],
    immune: [],
  },
  water: {
    weak: ['grass', 'electric'],
    resist: ['steel', 'fire', 'water', 'ice'],
    immune: [],
  },
  grass: {
    weak: ['flying', 'poison', 'bug', 'fire', 'ice'],
    resist: ['ground', 'water', 'grass', 'electric'],
    immune: [],
  },
  electric: {
    weak: ['ground'],
    resist: ['flying', 'steel'],
    immune: [],
  },
  psychic: {
    weak: ['bug', 'ghost', 'dark'],
    resist: ['fighting', 'psychic'],
    immune: [],
  },
  ice: {
    weak: ['fighting', 'rock', 'steel', 'fire'],
    resist: ['ice'],
    immune: [],
  },
  dragon: {
    weak: ['ice', 'dragon', 'fairy'],
    resist: ['fire', 'water', 'grass', 'electric'],
    immune: [],
  },
  dark: {
    weak: ['fighting', 'bug', 'fairy'],
    resist: ['ghost', 'dark'],
    immune: [],
  },
  fairy: {
    weak: ['poison', 'steel'],
    resist: ['fighting', 'bug', 'dark'],
    immune: ['dragon'],
  },
};

export const typeToColor = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const effectiveness = {
  superEffective: 2,
  veryEffective: 1,
  normalEffective: 0.5,
  notVeryEffective: 0.25,
  noEffect: 0,
};

export const calculateEffectiveness = (defendingType, attackingType) => {
  if (types[attackingType].weak.includes(defendingType)) {
    return effectiveness.superEffective;
  } else if (types[attackingType].resist.includes(defendingType)) {
    return effectiveness.notVeryEffective;
  } else if (types[defendingType].weak.includes(attackingType)) {
    return effectiveness.veryEffective;
  } else if (types[defendingType].resist.includes(attackingType)) {
    return effectiveness.notVeryEffective;
  } else if (types[defendingType].immune.includes(attackingType)) {
    return effectiveness.noEffect;
  } else if (types[defendingType].normalEffective.includes(attackingType)) {
    return effectiveness.normalEffective;
  } else {
    return effectiveness.normalEffective;
  }
};

export const compareTypes = (attackingType, defendingType) => {
  if (types[defendingType].weak.includes(attackingType)) {
    return effectiveness.veryEffective;
  } else if (types[defendingType].immune.includes(attackingType)) {
    return effectiveness.noEffect;
  } else if (types[defendingType].resist.includes(attackingType)) {
    return effectiveness.notVeryEffective;
  } else {
    return effectiveness.normalEffective;
  }
};

export const getEffectivenessText = (
  effectivenessValue,
  attackingType,
  defendingType
) => {
  const formattedAttackingType =
    attackingType.charAt(0).toUpperCase() + attackingType.slice(1);
  const formattedDefendingType =
    defendingType.charAt(0).toUpperCase() + defendingType.slice(1);

  if (effectivenessValue === effectiveness.veryEffective) {
    return (
      <p>
        <strong>{formattedAttackingType} moves</strong> are{' '}
        <strong>very effective</strong> against {formattedDefendingType}{' '}
        Pokémon!
      </p>
    );
  } else if (effectivenessValue === effectiveness.normalEffective) {
    return (
      <p>
        <strong>{formattedAttackingType} moves</strong> are{' '}
        <strong>normal effective</strong> against {formattedDefendingType}{' '}
        Pokémon.
      </p>
    );
  } else if (effectivenessValue === effectiveness.notVeryEffective) {
    return (
      <p>
        <strong>{formattedAttackingType} moves</strong> are{' '}
        <strong>not very effective</strong> against {formattedDefendingType}{' '}
        Pokémon...
      </p>
    );
  } else if (effectivenessValue === effectiveness.noEffect) {
    return (
      <p>
        <strong>{formattedAttackingType} moves</strong> have{' '}
        <strong>no effect</strong> against {formattedDefendingType} Pokémon!
      </p>
    );
  }
};
