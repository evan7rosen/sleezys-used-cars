import React, { Component } from "react";
import { Input, Label, Menu } from "semantic-ui-react";
import { connect } from "react-redux";

class LocationsSideNav extends Component {
  state = { activeItem: "locations" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu vertical style={{ marginTop: "20px" }}>
        <Menu.Item>
          <Input
            icon="search"
            placeholder="Search locations..."
            onChange={e => this.props.handleSearch(e.target.value)}
          />
        </Menu.Item>
        <Menu.Item
          name="locations"
          active={activeItem === "locations"}
          onClick={this.handleItemClick}
        >
          <Label color="teal">{this.props.locations.all.length}</Label>
          Locations
        </Menu.Item>

        <Menu.Item
          name="newLocation"
          active={activeItem === "newLocation"}
          onClick={(e, name) => {
            this.handleItemClick(e, name);
            this.props.addLocationClick();
          }}
        >
          Add New Location
        </Menu.Item>

        <Menu.Item
          name="editLocation"
          active={activeItem === "editLocation"}
          onClick={this.handleItemClick}
        >
          Edit Location
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

export default connect(mapStateToProps)(LocationsSideNav);
