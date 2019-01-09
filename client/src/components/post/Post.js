import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostItem from '../posts/PostItem';
import {Link} from 'react-router-dom';
import {getPost} from '../../actions/postActions';
import CommentForm from './CommentForm';

class Post extends Component{
  componentDidMount(){
    this.props.getPost(this.props.match.params.id);
  }
  render(){
    const {post, loading } = this.props.post;
    console.log('below are the props');
    console.log(this.props);
    let postContent;

    if(post === null){
      postContent = <h4>Loading...</h4>
    } else {
      postContent = (
        <div>
          <PostItem post={post} showActions={false}/>
          <CommentForm postId={post._id}/>
        </div>
      );
    }
    return(
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btm-light mb-3">
                Back To Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, {getPost})(Post);
