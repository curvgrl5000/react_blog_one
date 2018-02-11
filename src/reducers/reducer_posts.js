import { FETCH_POSTS } from '../actions/index';

const INITIAL_STATE = {
  all: [],    // a list of blogposts, will be an array
  post: null  // one for the currently selected post  

}; // its an empty object

// And the boiler plate stuff with the switch action:
export default function(state = INITIAL_STATE, action) {
  // JUST TESTING THIS THING:
  if (state === {
		form: {
			PostsNewContent: {
				title: 'Slouching Towards Bethlehem',
				categories: 'non-fiction',
				content: 'the sixties by J.Didion'
			}
		}
	}){ console.log("hallelujah!!");
  } else { 
    console.log("not yet"); 
  };

	switch(action.type) {
	case FETCH_POSTS:
		return { ...state, all: action.payload.data };
	default:
		return state;
	}
}
