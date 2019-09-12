import React from "react";
import { Card, Icon, Image, List } from "semantic-ui-react";
import Map from "./map.jpg";

const LocationItem = ({ location }) => (
  <Card key={location.id} style={{ color: "black" }}>
    <Image src={Map} size="medium" />
    <Card.Content>
      <Card.Header>{location.name}</Card.Header>
      <List>
        <List.Item>
          <List.Icon name="phone" />
          <List.Content>{location.phone}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="map marker alternate" />
          <List.Content>{location.address}</List.Content>
        </List.Item>
      </List>
    </Card.Content>
    <Card.Content extra>
      <List>
        <List.Item>
          <List.Icon name="car" />
          <List.Content>View Inventory</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="edit" />
          <List.Content>Edit Location</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="delete" />
          <List.Content>Delete Location</List.Content>
        </List.Item>
      </List>
    </Card.Content>
  </Card>
);

export default LocationItem;
