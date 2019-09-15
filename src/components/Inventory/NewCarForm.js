import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Button,
  Form,
  Input,
  Container,
  Header,
  Select
} from "semantic-ui-react";
import { addCar } from "../../store/cars/actions";

class NewCarForm extends Component {
  state = {
    make: "",
    model: "",
    year: "",
    vin: "",
    miles: "",
    price: "",
    location_id: 7,
    is_sold: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addCar(this.state);
    this.setState({});
    this.props.addCarClick();
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
        <Header as="h1">Add New Car</Header>
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
    addCar
  }
)(NewCarForm);

NewCarForm.propTypes = {
  locations: PropTypes.object.isRequired,
  cars: PropTypes.object.isRequired,
  addCar: PropTypes.func.isRequired,
  addCarClick: PropTypes.func.isRequired
};
