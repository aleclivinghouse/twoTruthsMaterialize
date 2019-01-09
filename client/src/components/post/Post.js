import React, {Component} from 'react';
import {connect} from 'react-redux';
import PostItem from '../posts/PostItem';
import {Link} from 'react-router-dom';
import {getPost} from '../../actions/postActions';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

class Post extends Component{
  componentDidMount(){
    this.props.getPost(this.props.match.params.id);
  }
  render(){
    const {post, loading } = this.props.post;
    console.log('these are the comments');
    console.log(post.comments);
    let postContent;

    if(post === null){
      postContent = <h4>Loading...</h4>
    }
    if(post.comments !== undefined){
      postContent = (
        <div>
          <PostItem post={post} showActions={false}/>
          <CommentForm postId={post._id}/>
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }
    if(post.comments === undefined){
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
//          <CommentFeed postId={post._id} comments={post.comments} />
