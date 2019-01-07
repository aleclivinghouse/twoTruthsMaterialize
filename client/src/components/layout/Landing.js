import React, {Component} from 'react';
import { Link } from 'react-router-dom';
class Landing extends Component{
  render(){
    return(
      <div>
      <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Quiz Share</h1>
            <p className="lead">
              {' '}
            </p>
            <hr />
            <a href="/register" to="/register" className="btn btn-lg btn-info mr-2">
              Sign Up
            </a>
            <a href="/login" to="/login" className="btn btn-lg btn-light">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
      </div>
    )
  }
}
export default Landing;
