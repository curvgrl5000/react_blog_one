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

	allPosts() { 
		return this.props.posts.map((post) => { 
			return (
				<li key={post.id} className="list-group-item gradcolor">
					<Link to={`posts/${post.id}`}>
						<span className="pull-xs-right">{post.categories}</span>
				  	<span className="b tall">{post.title}</span>
				  </Link>
			  </li>
			);
	  });
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link to="/posts/new" className="btn btn-primary">
					  POST +
					</Link>
				</div>
				<div>
					<h2>LIST OF POSTS</h2>
					<ul className="list-group">
					  {this.allPosts()}	
				  </ul>
				</div>	
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { posts: state.posts.all };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPosts }, dispatch);
}
    
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);

