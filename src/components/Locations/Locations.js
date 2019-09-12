import React from "react";
import { connect } from "react-redux";
import { Segment, Container, Header } from "semantic-ui-react";
import LocationList from "./LocationList";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";
import Mazda from "../Homepage/mazda.jpg";

const Locations = props => {
  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    padding: "20px"
  };
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{
          minHeight: 700,
          padding: "1em 0em",
          backgroundImage: `url(${Mazda})`,
          boxShadow: "inset 0px -15px 20px 10px rgba(255,255,255,1)"
        }}
        vertical
      >
        <TopNav></TopNav>
        <Container style={containerStyle}>
          <Header as="h1">Locations</Header>
          <button onClick={props.history.goBack}>Back</button>
          <LocationList></LocationList>
        </Container>
      </Segment>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(mapStateToProps)(Locations);
