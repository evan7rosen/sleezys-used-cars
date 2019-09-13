import React from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";

const CarItem = props => (
  <Item>
    <Item.Image src="/images/wireframe/image.png" />

    <Item.Content>
      <Item.Header as="a">My Neighbor Totoro</Item.Header>
      <Item.Meta>
        <span className="cinema">IFC Cinema</span>
      </Item.Meta>
      <Item.Description>Hello There</Item.Description>
      <Item.Extra>
        <Button primary floated="right">
          Buy tickets
          <Icon name="right chevron" />
        </Button>
        <Label>Limited</Label>
        <Label icon="globe" content="Additional Languages" />
      </Item.Extra>
    </Item.Content>
  </Item>
);

export default CarItem;
