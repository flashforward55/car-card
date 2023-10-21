import styled from '@emotion/styled';
import { theme } from 'styles';

export const HeroStyled = styled.div`
  background: ${theme.gradients.hero};
  color: ${theme.colors.txtColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.bgHero};
`;

export const HeroTextWrapper = styled.div`
  flex: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  border: 1px solid ${theme.colors.borderPrimary};
  padding: 20px;
  background-color: ${theme.colors.bgPrimary};
  text-align: left;
`;

export const HeroText = styled.p`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const RedirectionLink = styled.a`
  display: inline-block;
  padding: 10px 20px;
  background-color: ${theme.colors.bgAccent};
  color: ${theme.colors.textBtn};
  text-decoration: none;
  border-radius: 5px;
  font-weight: 600;
  transition: background-color 0.3s;

  transition: background-color 0.3s, transform 0.2s;
  transform: scale(1);

  &:hover {
    background-color: ${theme.colors.bgAccentHover};
    transform: scale(1.05);
  }
`;

export const HeroImageWrapper = styled.div`
  flex: 1;
  text-align: center;
`;

export const HeroImage = styled.img`
  max-width: 100%;
  height: auto;
`;
