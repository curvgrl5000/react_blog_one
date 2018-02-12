import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';


class PostsShow extends Component {
	static contextTypes = {
		router: PropTypes.object
	};
	
	componentWillMount() {
	  this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.params.id)
		  .then(() => {
		  	// blog has been deleted,
		  	// So we navigate the user to index
		  	// We navigate by calling 'this.context.router.push'
		  	// with the new path to navigate to.
		  	this.context.router.push('/');
		  });
	}

	render() {
		const{ post } = this.props;
		// same as ES5:
		// const post = this.props.post;

		if (!post) {
			return <div className="warn">LOADING! OR YOU CAN GO HOME HERE!!</div>
		}

		return (
			<div className="main">
				<div className="text-xs-left">
					<Link to="/" className="sml_lnks">
					  back to index
					</Link>
				</div>
				<h6 className="artifact">post numba: {this.props.params.id}</h6>
				<h3 className="title">{post.title}</h3>
				<h6 className="cat">categories: {post.categories}</h6>
				<p className="main_text">{post.content}</p>
				<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>kill it</button>
			</div>
		)			
	}
}

function mapStateToProps(state) {
	return { post: state.posts.post };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchPost, deletePost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);

