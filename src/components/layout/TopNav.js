import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const TopNav = props => (
  <Menu inverted secondary size="large">
    <Link to={"/"}>
      <Menu.Item as="a">Home</Menu.Item>
    </Link>

    <Link to={"/locations"}>
      <Menu.Item as="a">Locations</Menu.Item>
    </Link>

    <Link to={"/inventory"}>
      <Menu.Item as="a">Inventory</Menu.Item>
    </Link>

    <Menu.Item position="right" onClick={props.history.goBack}>
      <Button as="a" inverted>
        Back
      </Button>
      <Button
        as="a"
        inverted
        primary
        style={{ marginLeft: "0.5em" }}
        onClick={props.history.goForward}
      >
        Forward
      </Button>
    </Menu.Item>
  </Menu>
);
