import { Section } from 'components/Shared/Section/Section';
import { PageTitle } from 'components/Shared/PageTitle/PageTitle';
import { CardList } from 'components/Shared/CardList/CardList';
import { NoResults } from 'components/Shared/NoResults/NoResults';
import { RedirectionLink } from 'components/Shared/RedirectionLink/RedirectionLink';
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
          <RedirectionLink to="/rental">Add some cars</RedirectionLink>
        </NoResults>
      )}
    </Section>
  );
};
