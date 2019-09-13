import React from "react";
import { Container, Header } from "semantic-ui-react";

const LocationsHeader = () => (
  <Container text>
    <Header
      as="h1"
      content="Sleezy's Used Cars"
      inverted
      style={{
        fontSize: "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: "0.25em"
      }}
    />
    <Header
      as="h2"
      content="Dealership Locations"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "0.25em"
      }}
    />
  </Container>
);

export default LocationsHeader;
