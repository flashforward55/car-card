import styled from '@emotion/styled';
import { theme } from 'styles';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Header = styled.header`
  border-bottom: 1px solid ${theme.colors.borderAdditional};
`;

export const Container = styled.div`
  width: 1440px;
  margin: 0 auto;
`;

export const Footer = styled.footer`
  margin-top: auto;
  padding: 12px 0;
  text-align: center;
  border-top: 1px solid ${theme.colors.borderAdditional};
  background-color: ${theme.colors.bgAdditional};
`;
