import React, { Component } from "react";

import "./Styles.css";
class Tour extends Component {
  render() {
    return(
        <div className="tour">
           <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
          <div className="hero-landing">
          <div className="hero-title">
                <h1 style={{fontSize:"8rem", fontWeight:"bold"}}>NEWS</h1>
              </div>
          </div>
        <div className="tour-content">
          <p>We've added new tour dates check them out to see if we're coming to a city near you</p>
        </div>
        </div>
    );
  }
}
export default Tour;