import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import Map from "./map.jpg";

const LocationItem = () => (
  <Card>
    <Image src={Map} wrapped />
    <Card.Content>
      <Card.Header>Location Item</Card.Header>
      <Card.Meta>
        <span className="date">Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="user" />
        22 Friends
      </a>
    </Card.Content>
  </Card>
);

export default LocationItem;
