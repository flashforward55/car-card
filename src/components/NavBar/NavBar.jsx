import { NavBarStyled, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavBarStyled>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/catalog">Rental</StyledNavLink>
      <StyledNavLink to="/favorites">Favorite</StyledNavLink>
    </NavBarStyled>
  );
};
