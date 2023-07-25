// mock data for the test
const mockPokemonData = {
  id: 1,
  name: 'bulbasaur',
  types: [{ name: 'grass' }, { name: 'poison' }],
  sprite: 'https://example.com/bulbasaur.png',
};

// mock Axios response
const mockAxiosResponse = {
  data: mockPokemonData,
};

// mock Axios module
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve(mockAxiosResponse)),
}));

// import the function that fetches Pokemon data
import fetchPokemonData from './fetchPokemonData';

test('fetchPokemonData fetches Pokemon data correctly', async () => {
  const pokemonData = await fetchPokemonData();

  // Check if the fetched data matches the mock data
  expect(pokemonData).toEqual(mockPokemonData);

  // Check if Axios was called with the correct URL
  expect(axios.get).toHaveBeenCalledWith('https://pokeapi.co/api/v2/pokemon/1');
});
