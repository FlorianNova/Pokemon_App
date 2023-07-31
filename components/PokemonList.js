import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import fetchPokemonData from '../services/fetchPokemonData';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import { RiMenuLine } from 'react-icons/ri';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-left: 21px;
  margin-right: 21px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const SearchBar = styled.input`
  width: 50vw;
  padding: 12px;
  font-size: 2vw;
  border: 3px solid #ddd;
  border-radius: 20px;
  margin-bottom: 16px;
  display: block;
  margin: 0 auto;
  margin-bottom: 7%;
  background-color: #caf6d6;
  position: sticky;
  top: 5%;
  z-index: 1;
  box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80vw;
    font-size: 3vw;
  }

  @media (max-width: 3840px) {
    width: 60vw;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent;
  color: black;
  border: solid 5px black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  cursor: pointer;
  font-size: 30px;

  &:hover {
    background-color: #caf6d6;
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
`;

const ScrollToBottomButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: transparent;
  color: black;
  border: solid 5px black;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: ${(props) =>
    props.visible &&
    props.scrollPosition > 0 &&
    props.scrollPosition <
      document.documentElement.scrollHeight - window.innerHeight
      ? 'block'
      : 'none'};
  cursor: pointer;
  font-size: 30px;

  &:hover {
    background-color: #caf6d6;
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
`;

const SaveTeamsButton = styled.button`
  position: fixed;
  bottom: 80px;
  right: 20px;
  background-color: blue;
  color: white;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  border: none;
  outline: none;
`;

const MenuButton = styled.button`
  position: fixed;
  bottom: 140px;
  right: 20px;
  background-color: #ffd700;
  color: black;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  border: none;
  outline: none;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 20;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 20px;
`;

const SavedPokemonList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SavedPokemonItem = styled.li`
  margin-bottom: 10px;
`;

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [selectedPokemonList, setSelectedPokemonList] = useState([]);
  const [showSavedPokemonModal, setShowSavedPokemonModal] = useState(false);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const data = await fetchPokemonData();
        setPokemonData(data);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
      }
    };
    fetchPokemon();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }

      setScrollPosition(scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleScrollToBottomButton = () => {
      const scrollY = window.scrollY;
      const fullHeight = document.documentElement.scrollHeight;

      if (fullHeight - scrollY - window.innerHeight > 300) {
        setShowScrollToBottom(true);
      } else {
        setShowScrollToBottom(false);
      }
    };

    window.addEventListener('scroll', handleScrollToBottomButton);
    return () => {
      window.removeEventListener('scroll', handleScrollToBottomButton);
    };
  }, []);

  useEffect(() => {
    const storedSelectedPokemonList = localStorage.getItem(
      'selectedPokemonList'
    );
    if (storedSelectedPokemonList) {
      setSelectedPokemonList(JSON.parse(storedSelectedPokemonList));
    }
  }, []);

  const filteredPokemon = pokemonData.filter((pokemon) => {
    return (
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
    );
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollToBottom = () => {
    scroll.scrollToBottom();
  };

  const handleToggleSelect = (pokemon) => {
    if (
      selectedPokemonList.some((selected) => selected.number === pokemon.number)
    ) {
      setSelectedPokemonList((prevList) =>
        prevList.filter((selected) => selected.number !== pokemon.number)
      );
    } else if (selectedPokemonList.length < 6) {
      setSelectedPokemonList((prevList) => [...prevList, pokemon]);
    }
  };

  const handleSaveTeams = () => {
    localStorage.setItem(
      'selectedPokemonList',
      JSON.stringify(selectedPokemonList)
    );
  };

  const handleShowSavedPokemon = () => {
    setShowSavedPokemonModal(true);
  };

  const handleCloseModal = () => {
    setShowSavedPokemonModal(false);
  };

  return (
    <div>
      <SearchBar
        type="text"
        placeholder="Search by name or number..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GridWrapper>
        {filteredPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            number={pokemon.id}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
            selected={selectedPokemonList.some(
              (selected) => selected.number === pokemon.number
            )}
            onClick={() => handleToggleSelect(pokemon)}
          />
        ))}
      </GridWrapper>
      <ScrollToTopButton
        visible={showScrollToTop}
        onClick={scrollToTop}
        title="Scroll to Top"
      >
        &#8593;
      </ScrollToTopButton>
      <ScrollToBottomButton
        visible={showScrollToBottom}
        onClick={scrollToBottom}
        title="Scroll to Bottom"
        scrollPosition={scrollPosition}
      >
        &#8595;
      </ScrollToBottomButton>
      <SaveTeamsButton onClick={handleSaveTeams}>Save Teams</SaveTeamsButton>

      <MenuButton onClick={handleShowSavedPokemon}>
        <RiMenuLine size={24} />
      </MenuButton>

      <h2>Selected Pokemon:</h2>
      <div>
        {selectedPokemonList.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            name={pokemon.name}
            number={pokemon.number}
            imageUrl={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`}
          />
        ))}
      </div>

      {showSavedPokemonModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
            <h2>Gespeicherte Pokémon</h2>
            {selectedPokemonList.length > 0 ? (
              <SavedPokemonList>
                {selectedPokemonList.map((pokemon) => (
                  <SavedPokemonItem key={pokemon.number}>
                    {pokemon.name} (Number: {pokemon.number})
                  </SavedPokemonItem>
                ))}
              </SavedPokemonList>
            ) : (
              <p>Keine Pokémon gespeichert.</p>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}
