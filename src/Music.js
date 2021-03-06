import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Styles.css";
class Music extends Component {
  render() {
    return(
        <div className="music">

          <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <div className="hero-landing">
              <div className="hero-title">
                <h1 style={{fontSize:"8rem", fontWeight:"bold"}}>MUSIC</h1>
              </div>
            </div>
            <div className="row music-content">
              <div className="col-sm-6">
                <h1>Our Music</h1>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/hdBeP47lxRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              <div className="col-sm-6 soundcloud-api">
                  <iframe src="https://open.spotify.com/embed/album/6XzZ5pg9buAKNYg293KOQ8" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
        </div>
    );
  }
}
export default Music;