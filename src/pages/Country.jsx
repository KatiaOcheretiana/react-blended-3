import { Section, Container, CountryInfo, Loader } from 'components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId).then(setCountry).finally(setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <Container>{country && <CountryInfo {...country} />}</Container>
      {isLoading && <Loader />}
    </Section>
  );
};
