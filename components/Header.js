import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f5f5f5;
`;

const Header = () => {
  return (
    <NavWrapper>
      <div>Home</div>
    </NavWrapper>
  );
};

export default Header;
