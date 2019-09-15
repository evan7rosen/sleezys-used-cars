import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import { editLocation } from "../../store/locations/actions";

class EditLocationForm extends Component {
  state = {
    name: this.props.locations.selectedLocation.name,
    phone: this.props.locations.selectedLocation.phone,
    address: this.props.locations.selectedLocation.address
  };

  onChange = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.editLocation(
      this.state,
      this.props.locations.selectedLocation.id
    );
    this.props.editLocationClick();
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
        <Button type="cancel" onClick={this.props.editLocationClick}>
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
    editLocation
  }
)(EditLocationForm);

EditLocationForm.propTypes = {
  locations: PropTypes.object.isRequired,
  cars: PropTypes.object.isRequired,
  editLocation: PropTypes.func.isRequired,
  editLocationClick: PropTypes.func.isRequired
};
