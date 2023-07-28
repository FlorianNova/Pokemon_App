import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import SelectedPokemon from '../components/SelectedPokemon';

const TeamPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TeamWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
`;

const TeamCard = styled.div`
  width: 200px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  background-color: rgb(243, 243, 243);
  background-image: linear-gradient(to bottom, #fcfcfc, #f5f5f5);
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.1);
  padding: 10%;
  margin: 1%;
`;

const TeamName = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const PokemonImage = styled.div`
  width: 100%;
  padding-top: 100%;
  position: relative;
  border-radius: 80%;
`;

const PokemonName = styled.p`
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

export default function TeamsPage() {
  const [teams, setTeams] = useState([]);

  const handleSaveTeam = (teamName, selectedPokemon) => {
    const newTeam = { name: teamName, pokemon: selectedPokemon };
    setTeams((prevTeams) => [...prevTeams, newTeam]);
  };

  return (
    <TeamPageWrapper>
      <h1>Teams Page</h1>
      <SelectedPokemon selectedPokemon={[]} onSave={handleSaveTeam} />
      <TeamWrapper>
        {teams.map((team, index) => (
          <TeamCard key={index}>
            <TeamName>{team.name}</TeamName>
            {team.pokemon.map((pokemon) => (
              <div key={pokemon.number}>
                <PokemonImage>
                  <Image
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                    layout="fill"
                    objectFit="contain"
                    priority
                  />
                </PokemonImage>
                <PokemonName>{pokemon.name}</PokemonName>
              </div>
            ))}
          </TeamCard>
        ))}
      </TeamWrapper>
    </TeamPageWrapper>
  );
}
