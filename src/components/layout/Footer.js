import React from "react";
import { Container, Grid, Header, List, Segment } from "semantic-ui-react";

export const Footer = () => (
  <Segment inverted vertical style={{ padding: "5em 0em" }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item>Sitemap</List.Item>
              <List.Item>FAQ</List.Item>
              <List.Item>Contact Us</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header inverted as="h4" content="Services" />
            <List link inverted>
              <List.Item>0% Satisfaction Guarantee</List.Item>
              <List.Item>It Ain't Easy Being Sleezy</List.Item>
              <List.Item>Our Every Car is a Lemon Pledge</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4" inverted>
              Our Mission Statement
            </Header>
            <p>
              We're not happy until you're not happy! Find out how we can ruin
              your credit and get you into the worst car of your life at
              Sleezy's!
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);
