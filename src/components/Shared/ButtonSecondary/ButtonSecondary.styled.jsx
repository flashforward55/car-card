import styled from '@emotion/styled';
import { theme } from 'styles';

export const ButtonSecondaryStyled = styled.button`
  display: flex;
  gap: 2px;
  justify-content: center;
  align-items: baseline;
  margin: 0 auto;
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  color: ${theme.colors.textAccent};
  text-decoration-line: underline;
  transition: color 0.2s ${theme.transitions.cubicBezier},
    transform 0.2s ${theme.transitions.cubicBezier};

  &:hover,
  &:focus {
    color: ${theme.colors.bgAccentHover};
    transform: scale(1.2);
  }
`;
