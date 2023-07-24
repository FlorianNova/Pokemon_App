export default async function fetchPokemonData() {
  try {
    const response = await fetch(
      'https://pokeapi.co/api/v2/pokemon/?limit=898'
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return [];
  }
}
