export const types = {
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
  psychic: {
    weak: ['bug', 'ghost', 'dark'],
    resist: ['fighting', 'psychic'],
  },
  ice: { weak: ['fighting', 'rock', 'steel', 'fire'], resist: ['ice'] },
  dragon: {
    weak: ['ice', 'dragon', 'fairy'],
    resist: ['fire', 'water', 'grass', 'electric'],
  },
  dark: { weak: ['fighting', 'bug', 'fairy'], resist: ['ghost', 'dark'] },
  fairy: { weak: ['poison', 'steel'], resist: ['fighting', 'bug', 'dragon'] },
};

export const effectiveness = {
  superEffective: 2,
  veryEffective: 1,
  normalEffective: 0.5,
  notVeryEffective: 0.25,
  noEffect: 0,
};

export const colors = {
  superEffective: '#ff0000',
  veryEffective: '#ff6600',
  normalEffective: '#ffff00',
  notVeryEffective: '#99cc00',
  noEffect: '#00ff00',
};

export const compareTypes = (type1, type2) => {
  if (type1 === type2) return effectiveness.normalEffective;
  if (types[type1].weak.includes(type2)) return effectiveness.superEffective;
  if (types[type1].resist.includes(type2))
    return effectiveness.notVeryEffective;
  return effectiveness.veryEffective;
};
