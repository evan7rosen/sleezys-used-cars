import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { connect } from "react-redux";
import LocationItem from "./LocationItem";
import { addLocation } from "../../store/locations/actions";

const LocationList = props => {
  const listOfLocations = props.locations.all.map(location => (
    <LocationItem location={location} />
  ));
  return <Card.Group itemsPerRow={5}>{listOfLocations}</Card.Group>;
};

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

export default connect(
  mapStateToProps,
  {
    addLocation
  }
)(LocationList);
