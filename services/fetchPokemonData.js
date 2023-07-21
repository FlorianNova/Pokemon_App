const fetchPokemonData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=898');
  const data = await response.json();
  return data.results;
};

export default fetchPokemonData;