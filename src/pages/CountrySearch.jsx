import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const region = searchParams.get('region');

    if (!region) {
      return;
    }
    setIsLoading(true);
    fetchByRegion(region).then(setCountries).finally(setIsLoading(false));
  }, [searchParams]);
  const handleSubmit = region => {
    setSearchParams({ region });
  };
  return (
    <Section>
      <Container>
        <SearchForm handleSubmit={handleSubmit} />
        <CountryList countries={countries} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};
