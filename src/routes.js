import React from 'react';
import { Route, IndexRoute } from 'react-router';
// IndexRoute is a helperMethod to route to root

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

// Mapping from possible route to a components...
// Our root is represented by '/'
// This is a Parent > Child Relationship the way they are nested:
// Which means that 'this.props.children' need to be noted in the Parent.
// Remember we're just swapping out components, but we're still on the 
// same page...

export default (
  <Route path="/" component={App}>
  	<IndexRoute component={PostsIndex} />
  	<Route path="posts/new" component={PostsNew} />
  	<Route path="posts/:id" component={PostsShow} />
  </Route>
);











