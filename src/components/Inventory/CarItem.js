import React from "react";
import { Button, Icon, Item, Label, List } from "semantic-ui-react";
import { connect } from "react-redux";
import imgSrc from "./image.png";
import { removeCar, selectCar, editCar } from "../../store/cars/actions";

class CarItem extends React.Component {
  state = {
    make: this.props.car.make,
    model: this.props.car.model,
    year: this.props.car.year,
    vin: this.props.car.vin,
    miles: this.props.car.miles,
    price: this.props.car.price,
    location_id: this.props.car.location_id,
    is_sold: !this.props.car.is_sold
  };

  carLocation = this.props.locations.all.filter(
    location => location.id === this.props.car.location_id
  )[0];

  render() {
    return (
      <Item>
        <Item.Image src={imgSrc} />
        <Item.Content>
          <Item.Header as="a">
            {this.props.car.year} {this.props.car.make} {this.props.car.model}
          </Item.Header>
          <Item.Description>
            <List>
              <List.Item icon="dollar" content={this.props.car.price} />
              <List.Item icon="play" content={`VIN: ${this.props.car.vin}`} />
              <List.Item icon="car" content={`${this.props.car.miles} miles`} />
              <List.Item
                icon="add to cart"
                content={`${
                  !this.props.car.is_sold ? `In Stock` : `Out of Stock`
                }`}
              />
            </List>
          </Item.Description>
          <Item.Extra>
            <Button
              floated="right"
              color="red"
              onClick={() => this.props.removeCar(this.props.car.id)}
            >
              Delete
              <Icon name="right delete" />
            </Button>
            <Button
              primary
              floated="right"
              onClick={() => {
                this.props.selectCar(this.props.car);
                this.props.editCarClick();
              }}
            >
              Edit
              <Icon name="right edit" />
            </Button>
            {!this.props.car.is_sold ? (
              <Button
                floated="right"
                color="green"
                onClick={() => {
                  this.props.editCar(this.state, this.props.car.id);
                  window.alert("Sold!");
                }}
              >
                Purchase this Vehicle
                <Icon name="right dollar" />
              </Button>
            ) : (
              <Button
                floated="right"
                color="green"
                onClick={() => {
                  this.props.editCar(this.state, this.props.car.id);
                  window.alert("25% Restocking Fee Applies");
                }}
              >
                Return this Vehicle
                <Icon name="right dollar" />
              </Button>
            )}
            <Label icon="map marker" content={this.carLocation.name} />
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

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
    selectCar,
    editCar
  }
)(CarItem);
