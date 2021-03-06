import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import isEmpty from '../../validation/is-empty';
import {getPostsFromUser} from '../../actions/postActions';
import {setFollow} from '../../actions/followActions';
import Follow from './Follow';

class ProfileItem extends Component {
  //this is the route API/posts/user/id
  componentWillMount(){
    this.props.getPostsFromUser(this.props.profile.user._id);
  }

  onFollowClick(){
    this.props.setFollow(this.props.profile.user._id, this.props.auth.user.id)
  }
  render(){
    const profile = this.props.profile;
    const posts = this.props.post.posts;
    console.log('these are the posts');
    console.log(posts);
  let following = this.props.post.posts[1];
  let followers = this.props.post.posts[2];
  let followComponent;
  if(following !== undefined && followers !== undefined){
   followComponent =  <Follow theId={this.props.profile.user._id} following={following} followers={followers}/>
   }

  // console.log('these are the following in the profileItem component');
  // console.log(following);
  // console.log('these are the followers in the profileItem component');
  // console.log(followers);
    return(
      <div className="card card-body bg-light mb-3">
        <div className="row">
          <div className="col-lg-6 col-md-4 col-8">
                  {followComponent}
              <h3>{profile.user.name}</h3>
              <p>{profile.bio}</p>
                <ul>
                  {posts.map((post, index) => (
                    <div>
                      <li>
                        <p>{post.q1}</p>
                        <p>{post.q2}</p>
                        <p>{post.q3}</p>
                        <Link to={`/post/${post._id}`}>Go to Post</Link>
                      </li>
                    </div>
                ))}
                </ul>
          </div>
        </div>
        <div>
          <button onClick={this.onFollowClick.bind(this)} className="btn-info">
            Follow
          </button>
        </div>
        <div className="cold-md-4 d-none d-md-block">
          <h4>Things I like</h4>
          <ul className="list-group">
            {profile.skills.map((skill, index) => (
              <li key={index} className="list-group-item">
                <p>
                {skill}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  post: state.post,
  auth: state.auth,
});

export default connect(mapStateToProps, {getPostsFromUser, setFollow})(ProfileItem);
