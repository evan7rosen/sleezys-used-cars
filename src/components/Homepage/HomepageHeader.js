import React from "react";
import { Button, Container, Header, Icon } from "semantic-ui-react";

export const HomepageHeader = () => (
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
      content="Arizona's Repo Specialists"
      inverted
      style={{
        fontSize: "1.7em",
        fontWeight: "normal",
        marginTop: "0.25em"
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);
