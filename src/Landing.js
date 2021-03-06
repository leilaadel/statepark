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
              
              <div className="landing-news">
                <a href="/news/newdrummer">
                <div className="landing-news-block">
                  <img src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Drummer playing on a drum kit" width="300" ></img>
                  <p>Meet our new drummer</p>
                </div>
                </a>
              </div>
              <div className="landing-news">
                <a href="/news/newtourdates">
                <div className="landing-news-block">
                  <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Live music performance" width="300" ></img>
                  <p>Find the new dates added to the tour</p>
                </div>
                </a>
              </div>
              <div className="landing-news">
                <a href="/news/studiosession">
                <div className="landing-news-block">
                  <img src="https://images.pexels.com/photos/164907/pexels-photo-164907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Music recording mixing board" width="300" ></img>
                  <p>Finally in the studio for our next release</p>
                </div>
                </a>
              </div>
              <a href="/news">
                <h3>Find more news here...</h3>
              </a>


            </div>
            <div className="landing-video-content">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/hdBeP47lxRI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
  }
}
export default Landing;