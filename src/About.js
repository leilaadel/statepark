import React, { Component } from "react";


import "./Styles.css";
class About extends Component {
  render() {
    return(
        <div className="about">
           <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
           <div className="hero-landing">
          <div className="hero-title">
                <h1 style={{fontSize:"8rem", fontWeight:"bold"}}>ABOUT</h1>
              </div>
          </div>
          <div className="about-content">
            <p>Hey we are a band and we play music</p>
            <p>Do you like music then please listen to us</p>
          </div>
        </div>
    );
  }
}
export default About;