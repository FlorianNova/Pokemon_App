import Head from 'next/head';
import PokemonList from '../components/PokemonList';
import PokemonTypeCompareDisplay from '../components/BattleSimulator';
import styled from 'styled-components';
import { useState } from 'react';

const Title = styled.h1`
  text-align: center;
  font-size: 5vw;
  font-weight: bold;
  text-align: center;
  margin: 5% 0;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (max-width: 3840px) {
    grid-template-columns: repeat(1, 3fr);
  }
`;

const CompareButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState({
    pokemon1: '',
    pokemon2: '',
  });

  // Function to set the selected Pokemon.
  const handlePokemonSelection = (pokemon1, pokemon2) => {
    setSelectedPokemon({ pokemon1, pokemon2 });
  };

  const handleCompareClick = () => {
    // Implement the code for comparing Pokémon types here
    // and set the result in the comparisonResult variable
    const comparisonResult = 'The result of the comparison';

    setComparisonResult(comparisonResult); // Set the result in the state
  };

  const [comparisonResult, setComparisonResult] = useState('');

  return (
    <>
      <Head>
        <meta name="description" content="Pokémon Card List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>Pokémon Card List</Title>
        <GridWrapper>
          {/* Pass the function to select the Pokemon. */}
          <PokemonList onPokemonSelect={handlePokemonSelection} />
        </GridWrapper>

        {/* Display the Battle Simulator only if both Pokemon are selected. */}
        {selectedPokemon.pokemon1 && selectedPokemon.pokemon2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <CompareButton onClick={handleCompareClick}>Start Comparison</CompareButton>
          </div>
        )}

        {comparisonResult && (
          <div>
            <h2>Comparison Result:</h2>
            <p>{comparisonResult}</p>
          </div>
        )}
      </main>
    </>
  );
}
