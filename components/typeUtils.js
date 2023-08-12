export const types = {
  normal: {
    weak: ['fighting'],
    resist: [],
    immune: ['ghost'],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  fighting: {
    weak: ['flying', 'psychic', 'fairy'],
    resist: ['bug', 'rock', 'dark'],
    immune: [],
    normalEffective: [
      'normal',
      'fighting',
      'ground',
      'rock',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'ice',
      'dragon',
      'fairy',
    ],
  },
  flying: {
    weak: ['rock', 'electric', 'ice'],
    resist: ['fighting', 'bug', 'grass'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  poison: {
    weak: ['ground', 'psychic'],
    resist: ['fighting', 'poison', 'bug', 'grass', 'fairy'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'rock',
      'steel',
      'fire',
      'water',
      'electric',
      'psychic',
      'dragon',
    ],
  },
  ground: {
    weak: ['water', 'grass', 'ice'],
    resist: ['poison', 'rock', 'electric'],
    immune: ['electric'],
    normalEffective: [
      'normal',
      'fighting',
      'bug',
      'steel',
      'fire',
      'water',
      'grass',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  rock: {
    weak: ['fighting', 'ground', 'steel', 'water', 'grass'],
    resist: ['normal', 'flying', 'poison', 'fire'],
    immune: [],
    normalEffective: [
      'rock',
      'bug',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  bug: {
    weak: ['flying', 'rock', 'fire'],
    resist: ['fighting', 'ground', 'grass'],
    immune: [],
    normalEffective: [
      'normal',
      'poison',
      'bug',
      'steel',
      'water',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  ghost: {
    weak: ['ghost', 'dark'],
    resist: ['poison', 'bug'],
    immune: ['normal', 'fighting'],
    normalEffective: [
      'flying',
      'rock',
      'fire',
      'water',
      'grass',
      'electric',
      'ice',
      'dragon',
      'fairy',
    ],
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
    normalEffective: ['poison', 'water', 'electric', 'dark'],
  },
  fire: {
    weak: ['ground', 'rock', 'water'],
    resist: ['bug', 'steel', 'fire', 'grass', 'ice'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'fighting',
      'ground',
      'rock',
      'ghost',
      'water',
      'electric',
      'psychic',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  water: {
    weak: ['grass', 'electric'],
    resist: ['steel', 'fire', 'water', 'ice'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'fighting',
      'ground',
      'rock',
      'bug',
      'ghost',
      'psychic',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  grass: {
    weak: ['flying', 'poison', 'bug', 'fire', 'ice'],
    resist: ['ground', 'water', 'grass', 'electric'],
    immune: [],
    normalEffective: [
      'normal',
      'fighting',
      'rock',
      'steel',
      'psychic',
      'dragon',
      'dark',
    ],
  },
  electric: {
    weak: ['ground'],
    resist: ['flying', 'steel'],
    immune: [],
    normalEffective: [
      'normal',
      'poison',
      'rock',
      'bug',
      'ghost',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'dark',
      'fairy',
    ],
  },
  psychic: {
    weak: ['bug', 'ghost', 'dark'],
    resist: ['fighting', 'psychic'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'ground',
      'rock',
      'bug',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'fairy',
    ],
  },
  ice: {
    weak: ['fighting', 'rock', 'steel', 'fire'],
    resist: ['ice'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'ground',
      'bug',
      'ghost',
      'water',
      'grass',
      'electric',
      'psychic',
      'dark',
      'fairy',
    ],
  },
  dragon: {
    weak: ['ice', 'dragon', 'fairy'],
    resist: ['fire', 'water', 'grass', 'electric'],
    immune: [],
    normalEffective: [
      'normal',
      'poison',
      'fighting',
      'ground',
      'rock',
      'bug',
      'ghost',
      'steel',
      'psychic',
      'dark',
    ],
  },
  dark: {
    weak: ['fighting', 'bug', 'fairy'],
    resist: ['ghost', 'dark'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'poison',
      'ground',
      'rock',
      'steel',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
      'fairy',
    ],
  },
  fairy: {
    weak: ['poison', 'steel'],
    resist: ['fighting', 'bug', 'dark'],
    immune: [],
    normalEffective: [
      'normal',
      'flying',
      'ground',
      'rock',
      'fire',
      'water',
      'grass',
      'electric',
      'psychic',
      'ice',
      'dragon',
    ],
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

  console.log({att: type1Effectiveness})
  console.log({dev: type2Effectiveness})

  if (
    type1Effectiveness === effectiveness.superEffective ||
    type2Effectiveness === effectiveness.superEffective
  ) {
    return effectiveness.superEffective;
  } else if (
    type1Effectiveness === effectiveness.notVeryEffective ||
    type2Effectiveness === effectiveness.notVeryEffective
  ) {
    return effectiveness.notVeryEffective;
  } else if (
    type1Effectiveness === effectiveness.ineffective ||
    type2Effectiveness === effectiveness.ineffective
  ) {
    return effectiveness.ineffective;
  } else {
    return effectiveness.normalEffective;
  }
};

export const calculateEffectiveness = (attackingType, defendingType) => {
  console.log({att: attackingType})
  console.log({def: defendingType})
  if (types[attackingType].weak.includes(defendingType)) {
    return effectiveness.superEffective;
  } else if (types[attackingType].resist.includes(defendingType)) {
    return effectiveness.notVeryEffective;
  } else if (types[defendingType].weak.includes(attackingType)) {
    console.log({att: attackingType, def: defendingType})
    return effectiveness.veryEffective;
  } else if (types[defendingType].resist.includes(attackingType)) {
    return effectiveness.notVeryEffective;
  } else if (types[defendingType].normalEffective.includes(attackingType)) {
    return effectiveness.normalEffective;
  } else {
    return effectiveness.normalEffective; // Fallback to normalEffective for cases with no clear match
  }
};

export const getEffectivenessText = (
  effectivenessValue,
  attackingType,
  defendingType
) => {
  if (effectivenessValue === effectiveness.superEffective) {
    return `${attackingType} is very effective against ${defendingType}!`;
  } else if (effectivenessValue === effectiveness.veryEffective) {
    return `${attackingType} is very effective against ${defendingType}.`;
  } else if (effectivenessValue === effectiveness.normalEffective) {
    return `${attackingType} is normally effective against ${defendingType}.`;
  } else if (effectivenessValue === effectiveness.notVeryEffective) {
    return `${attackingType} is not very effective against ${defendingType}...`;
  } else if (effectivenessValue === effectiveness.noEffect) {
    return `${attackingType} has no effect against ${defendingType}.`;
  } else {
    return 'Unknown';
  }
};
