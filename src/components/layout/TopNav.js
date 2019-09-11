import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export const TopNav = () => (
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

    <Menu.Item position="right">
      <Button as="a" inverted>
        Log in
      </Button>
      <Button as="a" inverted primary style={{ marginLeft: "0.5em" }}>
        Sign Up
      </Button>
    </Menu.Item>
  </Menu>
);
