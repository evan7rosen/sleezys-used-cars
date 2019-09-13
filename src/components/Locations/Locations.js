import React from "react";
import { Segment, Container, Grid } from "semantic-ui-react";
import LocationList from "./LocationList";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";
import Mazda from "../Homepage/mazda2.jpg";
import LocationForm from "./LocationForm";
import LocationsHeader from "./LocationsHeader";
import LocationsSideNav from "./LocationsSideNav";

class Locations extends React.Component {
  state = {
    addLocation: false,
    query: ""
  };

  addLocationClick = () => {
    this.setState({ addLocation: !this.state.addLocation });
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
                minHeight: 600,
                padding: "1em 0em",
                backgroundImage: `url(${Mazda})`
              }}
              vertical
            >
              <TopNav history={this.props.history}></TopNav>
              <LocationsHeader></LocationsHeader>
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={2}>
            <LocationsSideNav
              addLocationClick={this.addLocationClick}
              handleSearch={this.handleSearch}
            ></LocationsSideNav>
          </Grid.Column>
          <Grid.Column width={14}>
            <Container style={this.containerStyle}>
              {!this.state.addLocation ? (
                <LocationList query={this.state.query}></LocationList>
              ) : (
                <LocationForm></LocationForm>
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

export default Locations;
