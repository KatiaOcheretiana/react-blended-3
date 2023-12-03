import { Grid, GridItem } from 'components';
import { Link, useParams } from 'react-router-dom';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <Link to={`/country/${item.id}`}>
            <img src={item.flag} alt={item.country} />
          </Link>
        </GridItem>
      ))}
    </Grid>
  );
};
