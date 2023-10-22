import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const NavBarStyled = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
  box-shadow: ${theme.shadows.nav};
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${theme.colors.txtColor};
  font-weight: bold;
  margin-right: 10px;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.colors.bgAdditional};
  }

  &.active {
    background-color: ${theme.colors.textAccent};
    color: ${theme.colors.textBtn};
  }
`;
