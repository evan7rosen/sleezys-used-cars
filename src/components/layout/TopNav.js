import React from "react";
import { Button, Menu } from "semantic-ui-react";

export const TopNav = () => (
  <Menu inverted secondary size="large">
    <Menu.Item as="a" active>
      Home
    </Menu.Item>
    <Menu.Item as="a">Work</Menu.Item>
    <Menu.Item as="a">Company</Menu.Item>
    <Menu.Item as="a">Careers</Menu.Item>
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
