import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFollowers} from '../../actions/followActions';
import {getFollowing} from '../../actions/followActions';

class Follow extends Component{
  componentDidMount(){
    this.props.getFollowers(this.props.auth.user.id);
    this.props.getFollowing(this.props.auth.user.id);
  }
  render(){
    console.log('here are the props in the follow component');
    console.log(this.props.follow);
    let followers = this.props.follow.followers;
    let following = this.props.follow.following;
    return(
      <div>
          <h6>Follow Component Rendered</h6>
          
      </div>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  follow: state.follow
})
export default connect(mapStateToProps, {getFollowers, getFollowing})(Follow);
