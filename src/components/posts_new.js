import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// connect and reduxForm do the same thing
// which is connect content from actions...
// to reducers, updating state
// remember: same thing - semantically named
import { reduxForm } from 'redux-form';


class PostsNew extends Component {	
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
			  <form onSubmit={handleSubmit(this.props.createPost)}>
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


