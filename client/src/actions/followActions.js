import axios from 'axios';
import {SET_FOLLOW, GET_ERRORS} from './types';

export const setFollow = (followingId, followerId) => dispatch => {
  axios
    .post(`/api/posts/${followingId}/${followerId}`)
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
