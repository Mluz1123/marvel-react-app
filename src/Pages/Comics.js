import { useState } from "react";
import { Grid, Header } from "semantic-ui-react";
import Container from "../Components/Container";
import ListComics from "../Components/ListComics/ListComics";
import useFetch from "../Hooks/useFetch";

export default function Comics() {
  const [renderComics, setRenderComics] = useState(10);

  const listComics = useFetch(
    `${process.env.REACT_APP_URL_BASE}/comics?ts=1&apikey=${process.env.REACT_APP_API_KEY_MARVEL}&hash=${process.env.REACT_APP_HASH_ID}&orderBy=focDate&limit=${renderComics}`
  );

  return (
    <div className="comics-page">
      <div id="slide-comics-image"></div>
      <Grid>
        <Grid.Column>
          <Container bg="light">
            <Header as="h2">Los mejores Cómics</Header>
            <ListComics
              listComics={listComics}
              renderComics={renderComics}
              setRenderComics={setRenderComics}
            />
          </Container>
        </Grid.Column>
      </Grid>
    </div>
  );
}
