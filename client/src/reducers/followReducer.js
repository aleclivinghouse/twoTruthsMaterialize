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
      follows: [action.payload, ...state.posts]
    }
    case GET_FOLLOWERS:
    console.log('this is the followers');
    console.log(action.payload);
    return {
      ...state,
      followers: action.payload
    }
    case GET_FOLLOWING:
    console.log('this is the following');
    console.log(action.payload);
    return {
      ...state,
      following: action.payload
    }
    default:
      return state;
  }
}
