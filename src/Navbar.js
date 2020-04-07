import React, { Component } from "react";
import $ from "jquery";
import "./Styles.css";
// import "./tipuesearch/tipuesearch";
// import "./tipuesearch/tipuesearch_content.js";
// import "./tipuesearch/tipuesearch_set.js";
// import "./tipuesearch/tipuesearch.min.js";

// var tipuesearch = {"pages": [
//     {"title": "Tipue", "text": "Tipue is a small web development studio based in North London.", "tags": "jQuery HTML5 CSS", "url": "http://www.tipue.com"},
//     {"title": "Tipue Search, a site search engine jQuery plugin", "text": "Tipue Search is a site search engine jQuery plugin. It's free, open source, responsive and fast. Tipue Search only needs a browser that supports jQuery. It doesn't need MySQL or similar. In Static mode it doesn't even need a web server.", "tags": "JavaScript", "url": "http://www.tipue.com/search"}
// ]};
class Navbar extends Component {

    // componentDidMount() {
    //     $(document).ready(function() {
    //         $('#tipue_search_input').tipuesearch();
    //     });
    //   }
    
  render() {
    return(
        <div className="navbar">
            <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

            <script src="tipuesearch/tipuesearch_content.js"></script>
            <link rel="stylesheet" href="tipuesearch/css/tipuesearch.css"/>
            <script src="tipuesearch/tipuesearch_set.js"></script>
            <script src="tipuesearch/tipuesearch.min.js"></script>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">State Park</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="/">Home<span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/music">Listen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/tour">Tour Info</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    </ul>

                    {/* <script>
                    $(document).ready(function() {
                        $('#tipue_search_input').tipuesearch();
                    });
                    </script> */}
{/* 
                    <form>
                        <div class="tipue_search_group">
                            <input type="text" name="q" id="tipue_search_input" pattern=".{3,}" title="At least 3 characters" required/><button type="submit" class="tipue_search_button"><div class="tipue_search_icon">&#9906;</div></button>
                        </div>
                    </form>

                    <div id="tipue_search_content"></div> */}

                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
  }
}
export default Navbar;