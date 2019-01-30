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
    let followers = this.props.follow.followers;
    console.log('these are the followers');
    console.log(followers);
    let following = this.props.follow.following;
    console.log('here are the following');
    console.log(following)
    return(
      <div>
         <Collapsible trigger="See Follows" className="btn btn-secondary">
          <div>
            <h6>Followers</h6>
            <ul className="list">
            {followers.map(p => <div><li key={p._id}>{p.follower.name}</li>
              </div>
             )}
            </ul>
            <h6>Following</h6>
            <ul className="list">
              {following.map(p => <div><li key={p._id}>{p.following.name}</li>
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
