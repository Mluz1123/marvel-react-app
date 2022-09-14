import { Grid, Header } from "semantic-ui-react";
import Container from "../Components/Container";
import ListSeries from "../Components/ListSeries/ListSeries";
import useFetch from "../Hooks/useFetch";

export default function Series() {
  const listSeries = useFetch(
    `${process.env.REACT_APP_URL_BASE}/series?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=startYear&limit=20`
  );
  return (
    <div>
      <div className="series-page">
        <div id="slide-series-image">
          <Grid>
            <Grid.Column>
              <Container bg="light">
                <Header as="h2">Las últimas series de Marvel</Header>
                <ListSeries listSeries={listSeries}></ListSeries>
              </Container>
            </Grid.Column>
          </Grid>
        </div>
      </div>
    </div>
  );
}
