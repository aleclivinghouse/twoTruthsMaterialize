import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFollowers} from '../../actions/followActions';
import {getFollowing} from '../../actions/followActions';
import Collapsible from 'react-collapsible';

class Follow extends Component{
  componentDidMount(){
    this.props.getFollowers(this.props.theId);
    this.props.getFollowing(this.props.theId);
  }
  render(){
    console.log('here are  the props in following');
    console.log(this.props);
    let followers = this.props.follow.followers;
    let following = this.props.follow.following;
    let followerNames = [];
    let followingNames = [];

    for(let follow of following){
      followingNames.push(follow.following.name);
    }
    for(let follower of followers){
      followerNames.push(follower.follower.name);
    }

    return(
      <div>
         <Collapsible trigger="See Friends">
          <div>
            <h6>Followers</h6>
            {followerNames.map(p => <li key={p.id}>{p}</li>)}
            <h6>Following</h6>
              {followingNames.map(p => <li key={p.id}>{p}</li>)}
         </div>
         </Collapsible>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  auth: state.auth,
  follow: state.follow
})
export default connect(mapStateToProps, {getFollowers, getFollowing})(Follow);
