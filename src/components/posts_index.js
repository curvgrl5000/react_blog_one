import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
	// this is a LifeCycle method componentWillMount - called once
	// which will be called once - it fetches the content here
	// its automatically called by React
	componentWillMount() {
		// console.log('this would be the time to call 
		// an action creator to fech post');
	  this.props.fetchPosts();
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
					  POST +
					</Link>
				</div>
				<div>List of blog posts</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}
    
export default connect(null, mapDispatchToProps)(PostsIndex);

