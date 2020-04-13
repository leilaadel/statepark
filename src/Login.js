import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom';
import "./Styles.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: false,
        }
    }
    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
        // this.setState({ password: event.target.value });
    }
    handleChangePassword = event => {
        this.setState({ password: event.target.value });
    }
    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(user);
        // axios.post('https://photoswami.com/api/auth/user/login', {
        //     email: this.state.email,    
        //     password: this.state.password
        //   })
        //   .then((response) => {
        //     console.log(response);
        //     console.log("success");
        //     localStorage.setItem("token", response.data.token);
        //     localStorage.setItem("firstName", response.data.firstName);
        //     localStorage.setItem("lastName", response.data.lastName);
        //     localStorage.setItem("phoneNumber", response.data.phoneNumber);
        //     localStorage.setItem("stripeId", response.data.stripeId);
        //     localStorage.setItem("loggedIn", response.statusText);
        //     localStorage.setItem("joined", response.data.joined);
        //     localStorage.setItem("email", response.data.email);
        //     localStorage.setItem("loggedinuser", "true");


        //     this.setState({redirect: true});
        //     // document.getElementById('error-message').style.display="none";
        //     // redirection = true;
        //     // console.log(redirection);
        //     // <Redirect to={{
        //     //     pathname: '/userprofile'
        //     // }}
        //     // />
        //     // this.props.history.push('/photographerpage/');            
        //     //this.props.history.push('/postcheckout/');
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //     console.log("error");
        //     // document.getElementById('error-message').style.display="";
        //   });
        //   console.log(redirection+"lasjk");
        // axios.post('https://photoswami.com/api/auth/user/login', {user})
        //     .then(res => {
        //         console.log(res);
        //         console.log(res.data);
        //     })

        // if (localStorage.testData != undefined){
        //     console.log("huh");
        //     this.props.history.push('/userprofile');
        // }
        // console.log(localStorage.testData);

        // this.pageRedirect();
    }


    render(){
        if (this.state.redirect) {
            return <Redirect to = {{ pathname: "/redirectpage"}}/>;
        }
        else {
            return(
                <div className="login-user">
                    
                    <div className="login-form-user">
                        <h1>Login to photoSwami</h1>
                        <a href="/register">
                            <h3 style={{color: 'black'}}>Not a user yet? <span style={{color:'#292383'}}>Register here</span></h3>
                        </a>
                        <div className="error-message" id="error-message" style={{display: "none", background:"red", borderRadius: "10px"}}>
                            <h3>Email or Password is incorrect</h3>
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="email"  onChange={this.handleChangeEmail}/>
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" onChange={this.handleChangePassword}/>
                            </div>
                            <button type="submit" className="btn btn-primary" onSubmit={this.handleSubmit}>Sign In</button>
                        </form>
                        <a href="/loginphotographer" style={{color:"black"}}><p>Looking for the Photographer <span style={{color:'#292383'}}>Login?</span></p></a>
                    </div>
                    <div className="sub-login-user-form">
                        
                    </div>

    
                </div>
            )
        }

    }
}

export default Login;