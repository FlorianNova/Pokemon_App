const getPokemonTypes = async (name) => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const data = await response.json();
    const types = data.types.map((type) => type.type.name);
    return types;
  } catch (error) {
    console.error('Error fetching Pokemon types:', error);
    return [];
  }
};

export default getPokemonTypes;
