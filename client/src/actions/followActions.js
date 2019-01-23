import axios from 'axios';
import {SET_FOLLOW, GET_ERRORS, GET_FOLLOWERS, GET_FOLLOWING} from './types';


export const setFollow = (followingId, followerId) => dispatch => {
  axios
    .post(`/api/follow/${followingId}/${followerId}`)
    .then(res =>
      dispatch({
        type: SET_FOLLOW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const getFollowers = id => dispatch => {
  console.log('here is a string in getFollowers');
  axios
    .get(`/api/follow/followers/${id}`)
    .then(res => {
      console.log('here is the repsponse in getFollowers');
      console.log(res);

      dispatch({
        type: GET_FOLLOWERS,
        payload: res.data
      })
     }
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}

export const getFollowing = id => dispatch => {
  axios
    .get(`/api/follow/following/${id}`)
    .then(res =>
      dispatch({
        type: GET_FOLLOWING,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
}
