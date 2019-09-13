import React from "react";
import { Segment, Container, Header, Button, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { HomepageHeader } from "./HomepageHeader";
import { Footer } from "../layout/Footer";
import { TopNav } from "../layout/TopNav";
import Mazda from "./mazda.jpg";

const Homepage = props => {
  console.log("Homepage props", props);
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundImage: `url(${Mazda})`
        }}
        vertical
      >
        <TopNav history={props.history} />
        <HomepageHeader />
      </Segment>
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Quality Cars
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            We pride ourselves on our product. It's also why not every car has
            what it takes to be a Sleezy's car. Click the link below to view
            Sleezy's quality automobiles.
          </p>
          <Link to={"/inventory"}>
            <Button as="a" size="large">
              View our Inventory
            </Button>
          </Link>

          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          ></Divider>
          <Header as="h3" style={{ fontSize: "2em" }}>
            Many Convenient Locations to Serve You
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            With 21 convenient locations across the United States, Sleezy's Used
            Cars continues to be the premier destination for all things
            automotive. It’s our signature quality, world-class pricing and VIP
            customer service that makes customers for life.
          </p>
          <Link to={"/locations"}>
            <Button as="a" size="large">
              View our Locations
            </Button>
          </Link>
        </Container>
      </Segment>
      <Footer />
    </div>
  );
};

export default Homepage;
