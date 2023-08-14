import Head from 'next/head';
import PokemonList from '../components/PokemonList';
import styled from 'styled-components';
import { useState } from 'react';

const PokémonImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (max-width: 3840px) {
    grid-template-columns: repeat(1, 3fr);
  }
`;

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState({
    pokemon1: '',
    pokemon2: '',
  });

  const handlePokemonSelection = (pokemon1, pokemon2) => {
    setSelectedPokemon({ pokemon1, pokemon2 });
  };

  const handleCompareClick = () => {
    const comparisonResult = 'The result of the comparison';

    setComparisonResult(comparisonResult);
  };

  const [comparisonResult, setComparisonResult] = useState('');

  return (
    <>
      <Head>
        <meta name="description" content="Pokémon Card List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>
          <PokémonImage src="/Pokémon.png" alt="" />
        </Title>
        <GridWrapper>
          <PokemonList onPokemonSelect={handlePokemonSelection} />
        </GridWrapper>

        {selectedPokemon.pokemon1 && selectedPokemon.pokemon2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
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
