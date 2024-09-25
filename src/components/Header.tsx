import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

import addIcon from '../assets/add-circle.svg';

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 50px;

  padding: 10px 20px;
  background-color: #0090ff;
  color: white;
  text-align: center;

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    color: white;
  }
`;

const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  font-weight: 500;
  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0;
    padding: 0;
    color: white;
    max-height: 25px;

    img {
      max-width: 25px;
      width: 25px;
      aspect-ratio: 1;
      opacity: 0.5;
    }

    &.active {
      text-decoration: underline;

      img {
        opacity: 1;
      }
    }

    &:hover {
      text-decoration: underline;

      img {
        opacity: 1;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Link to={'/'}>
        <h1>HRnet</h1>
      </Link>
      <NavHeader>
        <NavLink to={'/create-employee'}>
          <img src={addIcon} alt="add icon" />
          Add
        </NavLink>
        <NavLink to={'/employee'}>Employee</NavLink>
      </NavHeader>
    </HeaderWrapper>
  );
};

export default Header;
