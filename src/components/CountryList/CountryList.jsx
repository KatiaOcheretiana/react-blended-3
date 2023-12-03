import { Grid, GridItem } from 'components';

export const CountryList = ({ countries }) => {
  return (
    <Grid>
      {countries.map(item => (
        <GridItem key={item.id}>
          <img src={item.flag} alt={item.country} />
        </GridItem>
      ))}
    </Grid>
  );
};
