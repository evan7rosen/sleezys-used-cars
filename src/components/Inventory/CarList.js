import React from "react";
import { Item } from "semantic-ui-react";
import CarItem from "./CarItem";

const CarList = props => (
  <Item.Group divided>
    <CarItem></CarItem>
  </Item.Group>
);

export default CarList;
