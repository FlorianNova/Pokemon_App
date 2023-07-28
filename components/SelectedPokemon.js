import { useState } from "react";
import Image from "next/image";

export default function SelectedPokemon({ selectedPokemon, onSave }) {
  const [teamName, setTeamName] = useState("");

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleSaveClick = () => {
    if (teamName.trim() === "") {
      alert("Please enter a name for the team.");
      return;
    }

    onSave(teamName, selectedPokemon);
    setTeamName("");
  };

  return (
    <div>
      <h2>Selected Pokémon:</h2>
      {selectedPokemon.map((pokemon) => (
        <div key={pokemon.number}>
          <Image src={pokemon.imageUrl} alt={pokemon.name} width={200} height={200} />
          <p>{pokemon.name}</p>
        </div>
      ))}
      <input
        type="text"
        placeholder="Choose Name..."
        value={teamName}
        onChange={handleTeamNameChange}
      />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}
