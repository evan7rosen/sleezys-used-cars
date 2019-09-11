import React from "react";
import { connect } from "react-redux";
import { TopNav } from "../layout/TopNav";
import { Footer } from "../layout/Footer";

const Inventory = props => {
  return (
    <div>
      <TopNav />
      <h1>Inventory</h1>
      <button onClick={props.history.goBack}>Back</button>
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
