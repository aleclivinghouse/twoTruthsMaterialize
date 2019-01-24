import isEmpty from '../validation/is-empty';
import { SET_FOLLOW, GET_FOLLOWERS, GET_FOLLOWING } from '../actions/types';

const initialState = {
  follows: [],
  followers: [],
  following: []
};

export default function(state = initialState, action){
  switch(action.type){
    case SET_FOLLOW:
    return {
      ...state,
      followers: [action.payload, ...state.followers]
    }
    case GET_FOLLOWERS:
    console.log(action.payload);
    return {
      ...state,
      followers: action.payload
    }
    case GET_FOLLOWING:
    return {
      ...state,
      following: action.payload
    }
    default:
      return state;
  }
}
