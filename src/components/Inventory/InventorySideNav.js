import React, { Component } from "react";
import { Input, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class InventorySideNav extends Component {
  state = { activeItem: "locations" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu vertical style={{ padding: "20px" }}>
        <Menu.Header>Locations</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="Digiprint Motors"
            active={activeItem === "Digiprint Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Exosis Motors"
            active={activeItem === "Exosis Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Conjurica Motors"
            active={activeItem === "Conjurica Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Pulze Motors"
            active={activeItem === "Pulze Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Kidstock Motors"
            active={activeItem === "Kidstock Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Zilladyne Motors"
            active={activeItem === "Zilladyne Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            name="Geofarm Motors"
            active={activeItem === "Geofarm Motors"}
            onClick={this.handleItemClick}
          ></Menu.Item>
        </Menu.Menu>
        <Menu.Item
          name="newCar"
          active={activeItem === "newCar"}
          onClick={(e, name) => {
            this.handleItemClick(e, name);
            this.props.addLocationClick();
          }}
        >
          Add New Car
        </Menu.Item>
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search cars..."
            onChange={e => this.props.handleSearch(e.target.value)}
          />
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = state => {
  return {
    locations: state.locations
  };
};

export default connect(mapStateToProps)(InventorySideNav);
