import React from 'react';
import { Route, IndexRoute } from 'react-router';
// IndexRoute is a helperMethod

import App from './components/app';
import PostsIndex from './components/posts_index';

// This is just to testing things...
const Greeting = () => {
	return <div>Hello Neighbor!</div>;
}

// Mapping from possible route to a components...
// Our root is represented by '/'
// This is a Parent > Child Relationship the way they are nested:
// Which means that 'this.props.children' need to be noted in the Parent.
export default (
  <Route path="/" component={App}>
  	<IndexRoute component={PostsIndex} />
  	<Route path="greet" component={Greeting} />   
    <Route path="greet2" component={Greeting} />  
  	<Route path="greet3" component={Greeting} />
  </Route>
);











