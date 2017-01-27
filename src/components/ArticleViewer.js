import React, { Component } from 'react';

class ArticleViewer extends Component {
	componentDidMount() {
		this.getData();
	}
	getData = () => {
		console.log('Get Data!');
	}
	render() {
		return (
			<div>
				<h1>ArticleViewer</h1>

			</div>
		);
	}
}

export default ArticleViewer;