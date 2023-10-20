import { useEffect, useState } from 'react';
import { getAdverts } from 'api/advertsApi';
import { Section } from 'components/Shared/Section/Section';
import { PageTitle } from 'components/Shared/PageTitle/PageTitle';
import { CardList } from 'components/Shared/CardList/CardList';
import { ButtonSecondary } from 'components/Shared/ButtonSecondary/ButtonSecondary';
import { NoResults } from 'components/Shared/NoResults/NoResults';
import { useFavorites } from 'hooks/useFavorites';
import { LIMIT, CANCELED_ERROR, ERROR_MESSAGE } from 'constants/constants';

export const RentalPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [isEndOfResults, setIsEndOfResults] = useState(false);
  const [, toggleFavorites] = useFavorites();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getAdverts(page, LIMIT, abortController.signal);
        setAdverts(prevState => [...prevState, ...data]);
        if (data.length < LIMIT) setIsEndOfResults(true);
      } catch (error) {
        if (error.name === CANCELED_ERROR) {
          setError('');
        } else {
          setError(ERROR_MESSAGE);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [page]);

  const handleLoadMore = async () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Section>
      {isLoading && <div>Loading...</div>}

      {error && <div>{error}</div>}

      {!isLoading && !error && adverts.length > 0 && (
        <>
          <PageTitle hidden>Catalog</PageTitle>

          <CardList data={adverts} toggleFavorites={toggleFavorites} />

          {!isEndOfResults ? (
            <ButtonSecondary type="button" onClick={handleLoadMore}>
              Load more
            </ButtonSecondary>
          ) : (
            <NoResults>We currently don't have any more cars available for you.</NoResults>
          )}
        </>
      )}
    </Section>
  );
};
