import React from "react";
import { Card, Image, List, Button, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import Map from "./map.jpg";
import { removeLocation, selectLocation } from "../../store/locations/actions";

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
          <Button size="mini">
            <Icon name="car"></Icon>View Inventory
          </Button>
        </List.Item>
        <List.Item>
          <Button
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
    selectLocation
  }
)(LocationItem);
