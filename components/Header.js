import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 16px;
`;

const NavLink = styled.a`
  text-decoration: none;
  padding: 8px 16px;
  border: 2px solid #333;
  border-radius: 8px;
  color: #333;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

const Header = () => {
  return (
    <NavWrapper>
      <Link href="/">Home</Link>
      <NavLinks>
        <Link href="/team page">
          <NavLink>Teams</NavLink>
        </Link>
        <NavLink onClick={() => window.history.back()}>go back</NavLink>
      </NavLinks>
    </NavWrapper>
  );
};

export default Header;
