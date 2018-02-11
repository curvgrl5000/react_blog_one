import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// connect and reduxForm do the same thing
// which is connect content from actions...
// to reducers, updating state
// remember: same thing - semantically named
import { reduxForm } from 'redux-form';


class PostsNew extends Component {	
	// Here we are using the PropTypes that is imported from react
	// to ensure we can change the context of the link on the submit action
	// This is done to improve the User Experience and to manage the outcome
	// of a successful posting of a new blog.
	// It is like this.props, but we're looking for the 'router' property
	// in the parent, which will allow us to grab the correct context
	// to link back when it meets a condition. It will use: this.context.router
	// to find the correct 'router' -- which is in index.js as <Router..>
	static contextTypes = {
		router: PropTypes.object
	};

	// this was turned into a helper function
	// so that when its successfully created, it 
	// .then send the user to index or home or ('/')
	onSubmit(props) {
		this.props.createPost(props)
		  .then(() => {
		  	// blog has been created,
		  	// So we navigate the user to index
		  	// We navigate by calling 'this.context.router.push'
		  	// with the new path to navigate to.
		  	this.context.router.push('/');
		  });
	}

	render() {
		
		// handleSubmit is a function that is 
		// provided to us by reduxForm to use onSubmit
		// WHEN the user sends the form, handleSubmit
		// acknowledges the action and validates the form
		
		const { handleSubmit } = this.props;
		// same thing as the non-ES6 way:
		// const handleSubmit = this.props.handleSubmit

		// Another way for the whole thing to be combined ES6:
		// const { fields: {title, categories, content}, handleSubmit } = this.props

		// the es5 way so we can see the mapping via console.log:
		const title = this.props.fields.title;
		console.log(title);
		
		const categories = this.props.fields.categories;
		//console.log(categories);
		
		const content = this.props.fields.content;
		//console.log(content);
		
		return (
			<div className="main">
			  <form onSubmit={handleSubmit( this.onSubmit.bind(this) )}>
					<h2>Create a New Post to Share</h2>
					
					<div className={` form-group ${title.touched && title.invalid ? 'has-danger' : '' } `}>
			  		<label>Title</label>
			  		<input type="text" className="form-control" {...title} />
					  <div className="text-help">
					  	{title.touched? title.error : ''}
					  </div>
					</div>

					<div className={` form-group ${categories.touched && categories.invalid ? 'has-danger' : '' } `}>
			  		<label>Categories</label>
			  		<input type="text" className="form-control" {...categories} />
					  <div className="text-help">
					  	{categories.touched? categories.error : ''}
					  </div>
					</div>

					<div className={` form-group ${content.touched && content.invalid ? 'has-danger' : '' } `}>
			  		<label>Content</label>
			  		<textarea className="form-control" {...content} />
						<div className="text-help">
					  	{content.touched? content.error : ''}
					  </div>
					</div>
					<button type="submit" className="btn btn-primary">SUBMIT +</button>
					<Link to="/" className="btn btn-danger">CANCEL</Link>			
			
			  </form>
			</div>
		);
	}
}

// Here's how we're validating all input
function validate(values) {
	const errors = {};

	if(!values.title) {
		console.log("life is challenging!");
		errors.title = 'Its called something, right?';
	}
	if(!values.categories) {
		console.log("best to pay bills on time!");
		errors.categories = 'Enter the category - organize the mayhem!';
	}
	if(!values.content) {
		console.log("stay foolish!");
		errors.content = 'Enter something worth while.';
	}

	return errors;
}


// just like we would do in connect
// we are passing in the configuration
// to reduxForm in the form of an object
// connect: 1st arg is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st arg is (form)configuration, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewContent',
	fields: ['title','categories','content'],
	validate: validate
}, null, { createPost })(PostsNew);

// what's happening is that value's
// assigned to each key, become 
// the keys for the new form in
// the state object

// if (state === {
// 			form: {
// 				PostsNewContent: {
// 					title: 'Slouching Towards Bethlehem',
// 					categories: 'non-fiction',
// 					content: 'the sixties by J.Didion'
// 				}
// 			}
// 		}){
// 	  console.log("hallelujah");
// }


