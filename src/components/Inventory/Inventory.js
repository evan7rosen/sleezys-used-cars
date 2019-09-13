import React from "react";
import { Segment, Container, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";
import Mazda from "../Homepage/mazda.jpg";
import CarList from "./CarList";
import InventoryHeader from "./InventoryHeader";
import InventorySideNav from "./InventorySideNav";
import NewCarForm from "./NewCarForm";

class Inventory extends React.Component {
  state = {
    addCar: false,
    query: ""
  };

  addCarClick = () => {
    this.setState({ addCar: !this.state.addCar });
  };

  handleSearch = query => {
    this.setState({ query: query });
    console.log(this.state.query);
  };

  containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: "8px",
    padding: "20px"
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
                minHeight: 500,
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
              addLocationClick={this.addLocationClick}
              handleSearch={this.handleSearch}
            ></InventorySideNav>
          </Grid.Column>
          <Grid.Column width={14}>
            <Container style={this.containerStyle}>
              {!this.state.addLocation ? (
                <CarList query={this.state.query}></CarList>
              ) : (
                <NewCarForm></NewCarForm>
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
