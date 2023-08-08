// Mocking fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        results: [
          { name: 'bulbasaur' },
          { name: 'charmander' },
          { name: 'squirtle' },
        ],
      }),
  })
);

// Import the function to be tested
import fetchPokemonData from './fetchPokemonData';

test('fetchPokemonData fetches Pokemon data correctly', async () => {
  const pokemonData = await fetchPokemonData();

  // Check if the fetched data is an array with 3 elements
  expect(Array.isArray(pokemonData)).toBe(true);
  expect(pokemonData).toHaveLength(3);

  // Check if the data has the correct structure
  expect(pokemonData[0]).toEqual({ id: 1, name: 'bulbasaur' });
  expect(pokemonData[1]).toEqual({ id: 2, name: 'charmander' });
  expect(pokemonData[2]).toEqual({ id: 3, name: 'squirtle' });

  // Check if fetch function was called with the correct URL
  expect(fetch).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/?limit=898');
});