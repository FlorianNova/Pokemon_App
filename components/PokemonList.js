import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import fetchPokemonData from '../services/fetchPokemonData';
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

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

  @media (max-width: 3840px) {
    width: 60vw;
  }
`;

const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  cursor: pointer;
  font-size: 18px;
`;

const ScrollToBottomButton = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: ${(props) =>
    props.visible && props.scrollPosition > 0 && props.scrollPosition < document.documentElement.scrollHeight - window.innerHeight
      ? 'block'
      : 'none'};
  cursor: pointer;
  font-size: 18px;
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
    </div>
  );
}
