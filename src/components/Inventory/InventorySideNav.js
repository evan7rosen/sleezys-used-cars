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
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search cars..."
            onChange={e => this.props.handleSearch(e.target.value)}
          />
        </Menu.Item>
        <Menu.Header>Locations</Menu.Header>
        <Menu.Menu>
          <Menu.Item
            name="All Locations"
            active={activeItem === "All Locations"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick({ id: 0 });
            }}
          ></Menu.Item>
          <Menu.Item
            name="Digiprint Motors"
            active={activeItem === "Digiprint Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(1);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Exosis Motors"
            active={activeItem === "Exosis Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(2);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Conjurica Motors"
            active={activeItem === "Conjurica Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(3);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Pulze Motors"
            active={activeItem === "Pulze Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(4);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Kidstock Motors"
            active={activeItem === "Kidstock Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(5);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Zilladyne Motors"
            active={activeItem === "Zilladyne Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(6);
            }}
          ></Menu.Item>
          <Menu.Item
            name="Geofarm Motors"
            active={activeItem === "Geofarm Motors"}
            onClick={(e, name) => {
              this.handleItemClick(e, name);
              this.props.selectLocationClick(7);
            }}
          ></Menu.Item>
        </Menu.Menu>
        <Menu.Item
          name="newCar"
          active={activeItem === "newCar"}
          onClick={(e, name) => {
            this.handleItemClick(e, name);
            this.props.addCarClick();
          }}
        >
          Add New Car
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
