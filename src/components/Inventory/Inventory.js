import React from "react";
import { connect } from "react-redux";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";
import CarList from "./CarList";

const Inventory = props => {
  return (
    <div>
      <TopNav history={props.history} />
      <h1>Inventory</h1>
      <CarList></CarList>
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

export default connect(mapStateToProps)(Inventory);
