import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { theme } from 'styles';

export const LinkStyled = styled(Link)`
  display: inline-block;
  width: 180px;
  padding: 10px 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);
  color: ${theme.colors.textBtn};
  background-color: ${theme.colors.bgAccent};
  border-radius: 12px;
  transition: background-color 0.2s ${theme.transitions.cubicBezier};

  &:hover,
  &:focus {
    background-color: ${theme.colors.bgAccentHover};
  }
`;
