import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Input,
  Container,
  Header,
  Select
} from "semantic-ui-react";
import { editCar } from "../../store/cars/actions";

class EditCarForm extends Component {
  state = {
    make: this.props.cars.selectedCar.make,
    model: this.props.cars.selectedCar.model,
    year: this.props.cars.selectedCar.year,
    vin: this.props.cars.selectedCar.vin,
    miles: this.props.cars.selectedCar.miles,
    price: this.props.cars.selectedCar.price,
    location_id: this.props.cars.selectedCar.location_id,
    is_sold: this.props.cars.selectedCar.is_sold
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editCar(this.state, this.props.cars.selectedCar.id);
    this.props.editCarClick();
  };

  options = [
    { text: "Digiprint Motors", value: 1 },
    { text: "Exosis Motors", value: 2 },
    { text: "Conjurica Motors", value: 3 },
    { text: "Pulze Motors", value: 4 },
    { text: "Kidstock Motors", value: 5 },
    { text: "Zilladyne Motors", value: 6 },
    { text: "Geofarm Motors", value: 7 }
  ];

  render() {
    return (
      <Container style={{ padding: "20px" }}>
        <Header as="h1">Edit Car</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="year"
              placeholder="year"
              name="year"
              value={this.state.year}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              label="make"
              placeholder="make"
              name="make"
              value={this.state.make}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              label="model"
              placeholder="model"
              name="model"
              value={this.state.model}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              control={Input}
              label="vin"
              placeholder="vin"
              name="vin"
              value={this.state.vin}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              label="miles"
              placeholder="miles"
              name="miles"
              value={this.state.miles}
              onChange={this.handleChange}
            />
            <Form.Field
              control={Input}
              label="price"
              placeholder="price"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Field
            control={Select}
            label="Dealership"
            options={this.options}
            placeholder="Dealership"
            name="location_id"
            onChange={this.handleChange}
          />

          <Form.Field type="submit" control={Button}>
            Submit
          </Form.Field>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(
  mapStateToProps,
  {
    editCar
  }
)(EditCarForm);
