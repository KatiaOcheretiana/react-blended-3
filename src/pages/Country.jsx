import { Section, Container, CountryInfo, Loader } from 'components';
import { ButtonBack } from 'components/ButtonBack/ButtonBack';
import { useEffect, useRef, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchCountry } from 'service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [country, setCountry] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    setIsLoading(true);
    fetchCountry(countryId).then(setCountry).finally(setIsLoading(false));
  }, [countryId]);

  return (
    <Section>
      <ButtonBack to={goBack.current} />
      <Container>{country && <CountryInfo {...country} />}</Container>
      {isLoading && <Loader />}
    </Section>
  );
};
