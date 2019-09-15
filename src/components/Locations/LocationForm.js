import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import { addLocation } from "../../store/locations/actions";

class LocationForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };

  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addLocation(this.state);
    this.setState({
      name: "",
      phone: "",
      address: ""
    });
    this.props.addLocationClick();
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            placeholder="Name"
            onChange={this.onChange}
            value={this.state.name}
            name="name"
            required
          />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input
            placeholder="Phone Number"
            onChange={this.onChange}
            value={this.state.phone}
            name="phone"
            required
            type="tel"
          />
        </Form.Field>
        <Form.Field>
          <label>Address</label>
          <input
            placeholder="Address"
            onChange={this.onChange}
            value={this.state.address}
            name="address"
            required
          />
        </Form.Field>
        <Button type="submit">Submit</Button>
        <Button type="cancel" onClick={this.props.addLocationClick}>
          Cancel
        </Button>
      </Form>
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
    addLocation
  }
)(LocationForm);

LocationForm.propTypes = {
  locations: PropTypes.object.isRequired,
  cars: PropTypes.object.isRequired,
  addLocation: PropTypes.func.isRequired,
  addLocationClick: PropTypes.func.isRequired
};
