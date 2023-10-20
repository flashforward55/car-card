import { NavLink } from 'react-router-dom';
import { Section } from 'components/Shared/Section/Section';
import { PageTitle } from 'components/Shared/PageTitle/PageTitle';
import { CardList } from 'components/Shared/CardList/CardList';
import { NoResults } from 'components/Shared/NoResults/NoResults';
import { useFavorites } from 'hooks/useFavorites';

export const FavoritePage = () => {
  const [favorites, toggleFavorites] = useFavorites();

  return (
    <Section>
      <PageTitle hidden>Favorite</PageTitle>

      {favorites.length ? (
        <CardList data={favorites} toggleFavorites={toggleFavorites} />
      ) : (
        <NoResults>
          <span>Your favorites list is empty. </span>
          <NavLink to="/rental">Click here</NavLink>
          <span> to add some cars?</span>
        </NoResults>
      )}
    </Section>
  );
};
