import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFollowers} from '../../actions/followActions';
import {getFollowing} from '../../actions/followActions';
import Collapsible from 'react-collapsible';
import './main.css';

class Follow extends Component{
  componentDidMount(){
    this.props.getFollowers(this.props.theId);
    this.props.getFollowing(this.props.theId);
  }

  onDeleteClick(id){
      this.props.unFollow(id);
  }


  render(){
    console.log('here are  the props in following');
    console.log(this.props);
    let followers = this.props.follow.followers;
    console.log('these are the followers');
    console.log(followers);
    let following = this.props.follow.following;
    let followerNames = [];
    let followingNames = [];

    for(let follow of following){
      let map = {};
      map.name = follow.following.name;
      map._id = follow._id
      followingNames.push(map);
      console.log('this is a follow');
      console.log(follow);
    }
    for(let follower of followers){
      let map = {};
      map.name = follower.follower.name;
      followerNames.push(map);
      console.log('this is the follower map');
      console.log(map);
    }

    return(
      <div>
         <Collapsible trigger="See Follows" className="btn btn-secondary">
          <div>
            <h6>Followers</h6>
            <ul className="list">
            {followerNames.map(p => <div><li key={p._id}>{p.name}</li>
              </div>
             )}
            </ul>
            <h6>Following</h6>
            <ul className="list">
              {followingNames.map(p => <div><li key={p._id}>{p.name}</li>
                </div>
          )}
            </ul>
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
