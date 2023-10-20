import styled from '@emotion/styled';
import { theme } from 'styles';

export const NoResultsStyled = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.textPrimary};
`;
