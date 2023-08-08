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
  margin-left: 2vw;
  margin-right: 2vw;
  margin-bottom: 2vw;

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

  &:hover {
    box-shadow: 1px 5px 5px 1px rgba(0, 0, 0, 0.2);
    border: 3px solid lightgrey;
  }

  @media (max-width: 768px) {
    width: 80vw;
    font-size: 3vw;
  }

  @media (max-width: 3840px) {
    width: 60vw;
  }
`;

const ScrollButtons = styled.button`
  position: fixed;
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
    background-color: transparent;
    transform: scale(1.5);
    transition: transform 0.3s ease;
  }
`;

const ScrollToTopButton = styled(ScrollButtons)`
  bottom: 20px;
  left: 20px;
  z-index: 10;
`;

const ScrollToBottomButton = styled(ScrollButtons)`
  bottom: 20px;
  right: 20px;
  z-index: 10;
  display: ${(props) =>
    props.visible &&
    props.scrollPosition > 0 &&
    props.scrollPosition <
      document.documentElement.scrollHeight - window.innerHeight
      ? 'block'
      : 'none'};
`;

const MenuButton = styled.button`
  position: fixed;
  top: 2vw;
  left: 2vw;
  background-color: #ffd700;
  color: black;
  padding: 2vw;
  border-radius: 10px;
  cursor: pointer;
  font-size: 2vw;
  border: none;
  outline: none;
  z-index: 10;

  &:hover {
    background-color: #e2c100;
    transform: scale(1.05);
  }
`;

export default function PokemonList() {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [showScrollToBottom, setShowScrollToBottom] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  const filteredPokemon = pokemonData.filter((pokemon) => {
    if (searchTerm === '') return true;
    return (
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pokemon.id.toString().includes(searchTerm)
    );
  });

  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleScrollToBottom = () => {
    scroll.scrollToBottom();
  };

  return (
    <div>
      <ScrollToTopButton visible={showScrollToTop} onClick={handleScrollToTop}>
        &#8679;
      </ScrollToTopButton>
      <ScrollToBottomButton
        visible={showScrollToBottom}
        scrollPosition={scrollPosition}
        onClick={handleScrollToBottom}
      >
        &#8681;
      </ScrollToBottomButton>
      <SearchBar
        type="text"
        placeholder="Search for Pokémon..."
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
          />
        ))}
      </GridWrapper>
    </div>
  );
}
