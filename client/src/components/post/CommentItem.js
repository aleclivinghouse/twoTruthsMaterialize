import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { deleteComment, likeComment } from '../../actions/postActions';

class CommentItem extends Component {
  onDeleteClick(postId, commentId) {
    this.props.deleteComment(postId, commentId);
  }
  onLikeComment(postId, commentId) {
    this.props.likeComment(postId, commentId);
  }

  render() {
    const { comment, postId, auth } = this.props;
    console.log('these are the props in comment');
    console.log(this.props)

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={comment.avatar}
                alt=""
              />
            </a>
            <br />
            <div>
              <button
                onClick={this.onLikeComment.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-light mr-1"
              >
                <i className='fas fa-thumbs-up'  />
                <span className="badge badge-light">{comment.likes.length}</span>
              </button>
            </div>
            <p className="text-center">{comment.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{comment.text}</p>
            {comment.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />

              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment, likeComment })(CommentItem);
  // <span className="badge badge-light">{comment.likes.length}</span>
