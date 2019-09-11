import React from "react";
import { connect } from "react-redux";
import LocationList from "./LocationList";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";

const Locations = props => {
  return (
    <div>
      <TopNav></TopNav>
      <h1>Locations</h1>
      <button onClick={props.history.goBack}>Back</button>
      <LocationList></LocationList>
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cars: state.cars,
    locations: state.locations
  };
};

export default connect(mapStateToProps)(Locations);
