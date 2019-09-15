import React from "react";
import { Card } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import LocationItem from "./LocationItem";
import { addLocation } from "../../store/locations/actions";

const LocationList = props => {
  const listOfLocations = props.locations.all
    .filter(location =>
      location.name.toLowerCase().includes(props.query.toLowerCase())
    )
    .map(location => (
      <LocationItem
        location={location}
        editLocationClick={props.editLocationClick}
        key={location.id}
      />
    ));
  return <Card.Group itemsPerRow={4}>{listOfLocations}</Card.Group>;
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

LocationList.propTypes = {
  locations: PropTypes.object.isRequired,
  editLocationClick: PropTypes.func.isRequired,
  addLocation: PropTypes.func.isRequired
};
