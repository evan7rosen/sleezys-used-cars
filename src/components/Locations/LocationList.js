import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LocationItem from "./LocationItem";

const LocationList = () => (
  <Card.Group>
    <LocationItem></LocationItem>
  </Card.Group>
);

export default LocationList;
