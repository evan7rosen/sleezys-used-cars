import React from "react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import Homepage from "./components/Homepage/Homepage";
import Locations from "./components/Locations/Locations";

class App extends React.Component {
  componentDidMount() {
    // API CALL FUNCTIONS EXECUTE ON MOUNT, SET DATA TO REDUX STORE STATE
    this.props.fetchAllCars();
    this.props.fetchAllLocations();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Grid.Column>
            <Switch>
              <Route path="/" component={Homepage} />
              {/* <Route path="/inventory" component={Inventory} /> */}
              <Route path="/locations" component={Locations} />
            </Switch>
          </Grid.Column>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(
  mapStateToProps,
  {
    fetchAllCars,
    fetchAllLocations
  }
)(App);
