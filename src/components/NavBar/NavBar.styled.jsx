import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';
//import { theme } from 'styles';

export const NavBarStyled = styled.nav`
  background-color: #f0f0f0; /* Используем светло-серый цвет фона */
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  border-radius: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333; /* Меняем цвет текста */
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd; /* Изменяем цвет фона при наведении */
  }

  &.active {
    background-color: #007bff;
    color: #fff; /* Изменяем цвет текста для активной ссылки */
  }
`;
