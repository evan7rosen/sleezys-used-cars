import React from "react";
import { Item } from "semantic-ui-react";
import { connect } from "react-redux";
import CarItem from "./CarItem";
import { addCar } from "../../store/cars/actions";

const CarList = props => {
  const listOfCars = props.cars.all
    .filter(
      car =>
        car.is_sold === false &&
        (car.year.toString().includes(props.query) ||
          car.make.toLowerCase().includes(props.query.toLowerCase()) ||
          car.model.toLowerCase().includes(props.query.toLowerCase()))
    )
    .map(car => <CarItem car={car} />);
  return <Item.Group divided> {listOfCars}</Item.Group>;
};

const mapStateToProps = state => {
  return {
    cars: state.cars
  };
};

export default connect(
  mapStateToProps,
  {
    addCar
  }
)(CarList);
