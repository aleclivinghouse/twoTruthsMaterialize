import React, {Component} from 'react';
import PostItemForList from './PostItemForList';

class PostFeed extends Component{
  render(){
    const {posts} = this.props;
    return posts.map(post => <PostItemForList key={post._id} post={post} />)
  }
}

export default PostFeed;
