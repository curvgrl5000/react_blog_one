import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
  all: [],    // a list of blogposts, will be an array
  post: null  // one for the currently selected post  

}; // its an empty object

// And the boiler plate stuff with the switch action:
export default function(state = INITIAL_STATE, action) {
	switch(action.type) {
	case FETCH_POSTS:
		return { ...state, all: action.payload.data };	
	default:
		return state;
	}
}

