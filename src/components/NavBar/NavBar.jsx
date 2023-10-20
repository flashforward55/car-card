import { NavBarStyled, StyledNavLink } from './NavBar.styled';

export const NavBar = () => {
  return (
    <NavBarStyled>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/rental">Rental</StyledNavLink>
      <StyledNavLink to="/favorite">Favorite</StyledNavLink>
    </NavBarStyled>
  );
};
