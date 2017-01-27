import React, { Component } from 'react';
import ArticleViewer from './ArticleViewer';
import { Match } from 'react-router';
import { redirect } from '../store';

class App extends Component {
	goRoot = () => redirect('/article');
	goSub1 = () => redirect('/article/1')
	goSub2 = () => redirect('/article/2');
	render() {
		return (
			<div>
				<button onClick={this.goRoot}>/article</button>
				<button onClick={this.goSub1}>/article/1</button>
				<button onClick={this.goSub2}>/article/2</button>

				<Match pattern="/article/:id?" render={({params}) => 
					<ArticleViewer id={params.id} />
				}/>
			</div>
		)
	}
}

export default App;