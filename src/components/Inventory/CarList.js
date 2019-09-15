import React from "react";
import { Item, Container, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import CarItem from "./CarItem";
import { addCar } from "../../store/cars/actions";

const CarList = props => {
  const selectedLocation = props.locations.all.filter(
    location => location.id === props.selectedLocationId
  )[0];

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    padding: "20px"
  };

  const soldFilter = props.cars.all.filter(
    car => car.is_sold === props.viewSold
  );

  const locationFilter = soldFilter.filter(car =>
    props.selectedLocationId.id === 0
      ? car.location_id > 0
      : car.location_id === props.selectedLocationId
  );

  const searchFilter = locationFilter
    .filter(
      car =>
        car.year.toString().includes(props.query) ||
        car.make.toLowerCase().includes(props.query.toLowerCase()) ||
        car.model.toLowerCase().includes(props.query.toLowerCase())
    )
    .map(car => <CarItem car={car} editCarClick={props.editCarClick} />);

  return (
    <Container style={containerStyle}>
      <Header as="h1">
        {!props.viewSold
          ? `${searchFilter.length} vehicles available at
        ${selectedLocation ? " " + selectedLocation.name : " All Locations"}`
          : `${searchFilter.length} vehicles already sold at
        ${selectedLocation ? " " + selectedLocation.name : " All Locations"}`}
      </Header>
      <Item.Group divided> {searchFilter}</Item.Group>
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(
  mapStateToProps,
  {
    addCar
  }
)(CarList);
