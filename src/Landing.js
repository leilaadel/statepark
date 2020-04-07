import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Styles.css";
class Landing extends Component {
  render() {
    return(
        <div className="landing">
            {/* Leila Adel */}
            <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <div className="hero-landing">
              <div className="hero-title">
                <h1 style={{fontSize:"8rem", fontWeight:"bold"}}>STATE PARK</h1>
              </div>
            </div>
            <div className="landing-content">

              <div className="about">
                <h1>Here is where the about info is gonna go</h1>
              </div>
            </div>
        </div>
    );
  }
}
export default Landing;