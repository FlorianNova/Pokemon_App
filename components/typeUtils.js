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
    immune: [],
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
    immune: [],
  },
};

export const colors = {
  superEffective: '#ff0000',
  veryEffective: '#ff6600',
  normalEffective: '#ffff00',
  notVeryEffective: '#99cc00',
  noEffect: '#00ff00',
};

export const effectiveness = {
  superEffective: 2,
  veryEffective: 1,
  normalEffective: 0.5,
  notVeryEffective: 0.25,
  noEffect: 0,
};

export const compareTypes = (type1, type2) => {
  if (type1 === type2) return effectiveness.normalEffective;

  const type1Effectiveness = calculateEffectiveness(type1, type2);
  const type2Effectiveness = calculateEffectiveness(type2, type1);

  if (type1Effectiveness === effectiveness.superEffective || type2Effectiveness === effectiveness.superEffective) {
    return effectiveness.superEffective;
  } else if (type1Effectiveness === effectiveness.notVeryEffective || type2Effectiveness === effectiveness.notVeryEffective) {
    return effectiveness.notVeryEffective;
  } else if (type1Effectiveness === effectiveness.ineffective || type2Effectiveness === effectiveness.ineffective) {
    return effectiveness.ineffective;
  } else {
    return effectiveness.normalEffective;
  }
};

export const calculateEffectiveness = (attackingType, defendingType) => {
  if (types[attackingType].weak.includes(defendingType)) {
    return effectiveness.superEffective;
  } else if (types[attackingType].resist.includes(defendingType)) {
    return effectiveness.notVeryEffective;
  } else if (types[defendingType].weak.includes(attackingType)) {
    return effectiveness.veryEffective;
  } else if (types[defendingType].resist.includes(attackingType)) {
    return effectiveness.ineffective;
  } else {
    return effectiveness.normalEffective;
  }
};

export const getEffectivenessText = (effectivenessValue) => {
  switch (effectivenessValue) {
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
