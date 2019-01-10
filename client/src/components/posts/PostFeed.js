import React, {Component} from 'react';
import PostItem from './PostItem';

class PostFeed extends Component{
  render(){
    const {posts} = this.props;
    console.log('these are the posts in the feed');
    console.log(posts);
    return posts.map(post => <PostItem key={post._id} post={post} />)
  }
}

export default PostFeed;
