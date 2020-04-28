import React, { Component } from "react";


import "./Styles.css";
class About extends Component {
  render() {
    return(
        <div className="about">
           <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
           <div className="hero-landing">
          <div className="hero-title">
                <h1 style={{fontSize:"8rem", fontWeight:"bold"}}>NEWS</h1>
              </div>
          </div>
          <div className="news-content">
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


            </div>
          </div>
        </div>
    );
  }
}
export default About;