import { PageTitle } from 'components/Shared/PageTitle/PageTitle';
import { RedirectionLink } from 'components/Shared/RedirectionLink/RedirectionLink';
import { HeroStyled, HeroTextWrapper, HeroText, HeroImageWrapper } from './Hero.styled';
import heroImage from 'img/hero.png';

export const Hero = () => {
  return (
    <HeroStyled>
      <HeroTextWrapper>
        <PageTitle>Choose and Ride</PageTitle>
        <HeroText>
          Welcome to Choose and Ride, where we've redefined the way you rent cars, making it easy
          and exceptionally convenient.
        </HeroText>
        <HeroText>
          Our aim is to deliver an unparalleled car rental experience, catering to both your
          business and leisure travel needs. At Choose and Ride, our extensive vehicle selection
          encompasses luxury cars, SUVs, and compact vehicles. We've streamlined the rental process
          for your convenience, ensuring you hit the road swiftly, embarking on your adventure with
          ease.
        </HeroText>
        <RedirectionLink to="/catalog">Go it</RedirectionLink>
      </HeroTextWrapper>

      <HeroImageWrapper>
        <img src={heroImage} alt="Choose and Ride" />
      </HeroImageWrapper>
    </HeroStyled>
  );
};
