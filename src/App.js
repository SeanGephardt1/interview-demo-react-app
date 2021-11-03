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
			<div className="demo-sub-title">React ToDo List components</div>
			<FuncToDo />
			<ClsToDo />
		</div>
	);
};
export default App;