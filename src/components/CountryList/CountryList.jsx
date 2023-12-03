import { Grid, GridItem } from 'components';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  const location = useLocation();

  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.id}`} state={{ from: location }}>
            <img src={item.flag} alt={item.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
