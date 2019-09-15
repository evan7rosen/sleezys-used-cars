import React from "react";
import { Button, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export const TopNav = props => (
  <Menu inverted secondary size="large">
    <Link to={"/"}>
      <Menu.Item>Home</Menu.Item>
    </Link>

    <Link to={"/locations"}>
      <Menu.Item>Locations</Menu.Item>
    </Link>

    <Link to={"/inventory"}>
      <Menu.Item>Inventory</Menu.Item>
    </Link>

    <Menu.Item position="right" onClick={props.history.goBack}>
      <Button inverted>Back</Button>
      <Button
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

TopNav.propTypes = {
  history: PropTypes.object.isRequired
};
