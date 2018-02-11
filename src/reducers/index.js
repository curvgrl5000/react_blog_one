import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

import { reducer as formReducer } from 'redux-form';
// we are still importing reducer from redux-from,
// but with this language 'as formReducer'
// we're importing it and creating a variable called
// 'formReducer', and that's how you can reference it
// in your application

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
