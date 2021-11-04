import React from 'react';
import FuncToDo from './f-todo.js';
import ClsToDo from './cls-todo.js';
import './index.css';
//	TODO import AppStyles from './styles.js';

function App()
{
	return (
		<div className="demo-root">
			<div className="demo-title">Interview Demo</div>
			<div className="demo-sub-title">React ToDo List Component Demo</div>
			<div className="demo-text">
				<a
					className="demo-link"
					href="https://github.com/SeanGephardt1/interview-demo-react-app"
					target="_new">This GitHub repo</a>
			</div>
			<FuncToDo />
			<ClsToDo />
		</div>
	);
};
export default App;