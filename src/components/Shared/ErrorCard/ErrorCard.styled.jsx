import styled from '@emotion/styled';
import { theme } from 'styles';

export const ErrorCardStyled = styled.div``;

export const ErrorImage = styled.img`
  width: 100%;
  margin-bottom: 40px;
`;

export const ErrorText = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: ${theme.colors.textPrimary};

  & > span:first-of-type {
    font-size: 28px;
    margin-bottom: 12px;
  }
`;
