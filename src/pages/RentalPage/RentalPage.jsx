import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { PulseLoader } from 'react-spinners';
import { getAdverts } from 'api/advertsApi';
import { Section } from 'components/Shared/Section/Section';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { PageTitle } from 'components/Shared/PageTitle/PageTitle';
import { CardList } from 'components/Shared/CardList/CardList';
import { ButtonSecondary } from 'components/Shared/ButtonSecondary/ButtonSecondary';
import { NoResults } from 'components/Shared/NoResults/NoResults';
import { ErrorCard } from 'components/Shared/ErrorCard/ErrorCard';
import { useFavorites } from 'hooks/useFavorites';
import { filterAdverts } from 'helpers/filterAdverts';
import {
  LIMIT,
  CANCELED_ERROR,
  ERROR_MESSAGE,
  APOLOGIZE_MESSAGE,
  END_OF_RESULTS_MESSAGE,
  NO_RESULTS_MESSAGE,
} from 'constants/constants';
import { theme } from 'styles';
import { initialValues } from 'components/SearchBar/initialValues';

export const RentalPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [page, setPage] = useState(1);
  const [isEndOfResults, setIsEndOfResults] = useState(false);
  const [, toggleFavorites] = useFavorites();
  const [filters, setFilters] = useState(initialValues);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError('');
        const data = await getAdverts(page, LIMIT, abortController.signal);
        setAdverts(prevState => [...prevState, ...data]);
        if (data.length < LIMIT) {
          setIsEndOfResults(true);
          toast.success(END_OF_RESULTS_MESSAGE);
        }
      } catch (err) {
        if (err.name === CANCELED_ERROR) {
          setError('');
        } else {
          setError(APOLOGIZE_MESSAGE);
          toast.error(ERROR_MESSAGE);
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

  const handleSearch = filters => {
    setFilters(prevState => ({ ...prevState, ...filters }));
  };

  const filteredData = filterAdverts(adverts, filters);

  return (
    <>
      {error && <ErrorCard>{error}</ErrorCard>}

      {!error && adverts.length > 0 && (
        <>
          <PageTitle hidden>Catalog</PageTitle>

          <Section>
            <SearchBar handleSearch={handleSearch} />
          </Section>

          {!filteredData.length && <NoResults>{NO_RESULTS_MESSAGE}</NoResults>}

          <Section>
            <CardList data={filteredData} toggleFavorites={toggleFavorites} />
            {!isEndOfResults && (
              <ButtonSecondary type="button" onClick={handleLoadMore}>
                {isLoading ? (
                  <>
                    <span>Loading</span>
                    <PulseLoader color={theme.colors.bgAccent} size={3} />
                  </>
                ) : (
                  <span>Load more</span>
                )}
              </ButtonSecondary>
            )}
          </Section>
        </>
      )}
    </>
  );
};
