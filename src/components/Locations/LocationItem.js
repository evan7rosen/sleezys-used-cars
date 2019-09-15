import React from "react";
import { Card, Image, List, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Map from "./map.jpg";
import {
  removeLocation,
  selectLocation,
  editLocation
} from "../../store/locations/actions";
import { Link } from "react-router-dom";

const LocationItem = props => (
  <Card key={props.location.id} style={{ color: "black" }}>
    <Image src={Map} size="medium" />
    <Card.Content>
      <Card.Header>{props.location.name}</Card.Header>
      <List>
        <List.Item>
          <List.Icon name="phone" />
          <List.Content>{props.location.phone}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="map marker alternate" />
          <List.Content>{props.location.address}</List.Content>
        </List.Item>
      </List>
    </Card.Content>
    <Card.Content extra>
      <List>
        <List.Item>
          <Link to={"/inventory"}>
            <Button
              fluid
              size="mini"
              onClick={() => props.selectLocation(props.location)}
            >
              <Icon name="car"></Icon>View Inventory
            </Button>
          </Link>
        </List.Item>
        <List.Item>
          <Button
            fluid
            size="mini"
            onClick={() => {
              props.selectLocation(props.location);
              props.editLocationClick();
            }}
          >
            <Icon name="edit"></Icon>Edit Location
          </Button>
        </List.Item>
        <List.Item>
          <Button
            fluid
            size="mini"
            onClick={() => props.removeLocation(props.location.id)}
          >
            <Icon name="delete"></Icon>Delete Location
          </Button>
        </List.Item>
      </List>
    </Card.Content>
  </Card>
);

const mapStateToProps = state => {
  return {
    locations: state.locations,
    cars: state.cars
  };
};

export default connect(
  mapStateToProps,
  {
    removeLocation,
    selectLocation,
    editLocation
  }
)(LocationItem);

LocationItem.propTypes = {
  locations: PropTypes.object.isRequired,
  cars: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  selectLocation: PropTypes.func.isRequired,
  editLocationClick: PropTypes.func.isRequired,
  removeLocation: PropTypes.func.isRequired
};
