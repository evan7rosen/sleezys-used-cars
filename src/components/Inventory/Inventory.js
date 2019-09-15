import React from "react";
import { Segment, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";
import Mazda from "../Homepage/mazda2.jpg";
import CarList from "./CarList";
import InventoryHeader from "./InventoryHeader";
import InventorySideNav from "./InventorySideNav";
import NewCarForm from "./NewCarForm";
import EditCarForm from "./EditCarForm";

class Inventory extends React.Component {
  state = {
    addCar: false,
    editCar: false,
    viewSold: false,
    query: "",
    selectedLocationId: { id: 0 }
  };

  addCarClick = () => {
    this.setState({ addCar: !this.state.addCar });
  };

  editCarClick = () => {
    this.setState({ editCar: !this.state.editCar });
  };

  viewSoldClick = () => {
    this.setState({ viewSold: !this.state.viewSold });
  };

  selectLocationClick = locationId => {
    this.setState({ selectedLocationId: locationId });
  };

  handleSearch = query => {
    this.setState({ query: query });
  };

  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={16}>
            <Segment
              inverted
              textAlign="center"
              style={{
                minHeight: 600,
                padding: "1em 0em",
                backgroundImage: `url(${Mazda})`
              }}
              vertical
            >
              <TopNav history={this.props.history}></TopNav>
              <InventoryHeader></InventoryHeader>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <InventorySideNav
              addCarClick={this.addCarClick}
              handleSearch={this.handleSearch}
              selectLocationClick={this.selectLocationClick}
              viewSoldClick={this.viewSoldClick}
              viewSold={this.state.viewSold}
            ></InventorySideNav>
          </Grid.Column>
          <Grid.Column width={14}>
            <Container style={this.containerStyle}>
              {!this.state.addCar && !this.state.editCar ? (
                <CarList
                  query={this.state.query}
                  selectedLocationId={this.state.selectedLocationId}
                  viewSold={this.state.viewSold}
                  editCarClick={this.editCarClick}
                ></CarList>
              ) : this.state.addCar ? (
                <NewCarForm addCarClick={this.addCarClick}></NewCarForm>
              ) : (
                <EditCarForm editCarClick={this.editCarClick}></EditCarForm>
              )}
            </Container>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <Footer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(mapStateToProps)(Inventory);
