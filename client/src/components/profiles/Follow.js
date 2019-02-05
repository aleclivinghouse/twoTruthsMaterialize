import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {getFollowers} from '../../actions/followActions';
import {getFollowing} from '../../actions/followActions';
import Collapsible from 'react-collapsible';
import './main.css';

class Follow extends Component{
  render(){
    let followers = this.props.followers;
    let following = this.props.following;
    console.log('below are the followers in the follow component');
      console.log(followers);
    console.log('below are the following in the follow component');
    console.log(following);
    // console.log('these are the followers');
    // console.log(followers);
    // let following = this.props.follow.following;
    // console.log('here are the following');
    // console.log(following)
    return(
      <div>
        <Collapsible trigger="See Follows" className="btn btn-secondary">
         <div>
           <h6>Followers</h6>
           <ul className="list">
           {this.props.followers.map(p => <div><li key={p._id}>{p.following.name}</li>
             </div>
            )}
           </ul>
           <h6>Following</h6>
           <ul className="list">
             {this.props.following.map(p => <div><li key={p._id}>{p.follower.name}</li>
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
})
export default connect(mapStateToProps)(Follow);

//
