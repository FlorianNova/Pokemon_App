import { useState } from 'react';

const SelectedPokemon = ({ selectedPokemon, onSave }) => {
  const [teamName, setTeamName] = useState('');

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSaveClick = () => {
    if (teamName.trim() === '') {
      alert('Bitte geben Sie einen Namen für das Team ein.');
      return;
    }

    onSave(teamName, selectedPokemon);
    setTeamName('');
  };

  return (
    <div>
      <h2>Ausgewählte Pokémon:</h2>
      {selectedPokemon.map((pokemon) => (
        <div key={pokemon.number}>
          <img src={pokemon.imageUrl} alt={pokemon.name} />
          <p>{pokemon.name}</p>
        </div>
      ))}
      <input
        type="text"
        placeholder="Teamname eingeben..."
        value={teamName}
        onChange={handleTeamNameChange}
      />
      <button onClick={handleSaveClick}>Speichern</button>
    </div>
  );
};

export default SelectedPokemon;
