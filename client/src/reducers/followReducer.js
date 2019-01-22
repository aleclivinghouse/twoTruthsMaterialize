import isEmpty from '../validation/is-empty';
import { SET_FOLLOW } from '../actions/types';

const initialState = {
  follows: []
};

export default function(state = initialState, action){
  switch(action.type){
    case SET_FOLLOW:
    return {
      ...state,
      follows: [action.payload, ...state.posts]
    }
    default:
      return state;
  }
}
