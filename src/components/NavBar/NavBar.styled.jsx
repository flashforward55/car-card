import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavBarStyled = styled.nav`
  background-color: #f9f9f9;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }

  &.active {
    background-color: #007bff;
    color: #fff;
  }
`;
