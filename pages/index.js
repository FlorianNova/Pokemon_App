import React from 'react';
import Head from 'next/head';
import PokemonList from '../components/PokemonList';
import * as Styled from '../styles/PokemonCard.styles';

const Home = () => {
  return (
    <div>
      <Head>
        <title>PokéTeam Web App - Pokémon Card List</title>
        <meta name="description" content="Pokémon Card List" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hier wird der Titel "Pokemon Card List" mittig zentriert */}
        <Styled.Title>Pokémon Card List</Styled.Title>
        <PokemonList />
      </main>

      <footer>{/* hier ggf. den Footer hinzufügen */}</footer>
    </div>
  );
};

export default Home;
