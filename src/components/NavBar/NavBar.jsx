import { NavBarStyled, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavBarStyled>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Catalog</StyledNavLink>
      <StyledNavLink to="/favorites">Favorites</StyledNavLink>
    </NavBarStyled>
  );
};
