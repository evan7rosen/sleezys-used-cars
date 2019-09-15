import React from "react";
import { Button, Icon, Item, Label, List } from "semantic-ui-react";
import { connect } from "react-redux";
import imgSrc from "./image.png";
import { removeCar, selectCar } from "../../store/cars/actions";

const CarItem = props => {
  const carLocation = props.locations.all.filter(
    location => location.id === props.car.location_id
  )[0];

  return (
    <Item>
      <Item.Image src={imgSrc} />
      <Item.Content>
        <Item.Header as="a">
          {props.car.year} {props.car.make} {props.car.model}
        </Item.Header>
        <Item.Description>
          <List>
            <List.Item icon="dollar" content={props.car.price} />
            <List.Item icon="play" content={`VIN: ${props.car.vin}`} />
            <List.Item icon="car" content={`${props.car.miles} miles`} />
          </List>
        </Item.Description>
        <Item.Extra>
          <Button
            floated="right"
            color="red"
            onClick={() => props.removeCar(props.car.id)}
          >
            Delete
            <Icon name="right delete" />
          </Button>
          <Button
            primary
            floated="right"
            onClick={() => {
              props.selectCar(props.car);
              props.editCarClick();
            }}
          >
            Edit
            <Icon name="right edit" />
          </Button>
          <Button floated="right" color="green">
            Purchase this Vehicle
            <Icon name="right dollar" />
          </Button>
          <Label icon="map marker" content={carLocation.name} />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

const mapStateToProps = state => {
  return {
    locations: state.locations,
    cars: state.cars
  };
};

export default connect(
  mapStateToProps,
  {
    removeCar,
    selectCar
  }
)(CarItem);
