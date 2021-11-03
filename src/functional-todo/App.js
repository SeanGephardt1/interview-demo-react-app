import React, { useState } from 'react';
//	TODO import AppStyles from './styles.js';
import './index.css';

function App()
{
	const [ count, setCount ] = useState( 0 );
	const [ itemText, setItemText ] = useState( undefined );
	const [ list, addToList ] = useState( [] );

	function AddToList(ev)
	{
		console.debug( 'itemText', itemText );

		//	NOT NEEDED setItemText( itemText.target.value );

		if ( itemText.target.value === '' )
		{
			setItemText( undefined );
			return;
		}

		let _c = count;
		let _new = {
			id: _c,
			text: itemText.target.value
		};
		_c++;

		setCount( _c );
		addToList( [ ...list, _new ] );
		setItemText( '' );
		return;
	}

	function DeleteTodoItem( ev )
	{	//	console.debug( 'DeleteTodoItem', ev.target.value );
		let _sliced_array = list.filter( ( item =>
		{
			return item.id !== parseInt(ev.target.value);
		} ) );
		addToList( [ ..._sliced_array] );
		return;
	};

	return (
		<div className="demo-root">
			<div className="demo-title">Interview Demo</div>
			<div className="demo-sub-title">React Functional component using React Hooks</div>
			<div className="add-list-panel">
				<input
					type="text"
					tabIndex="0"
					placeholder="Add an item to the list"
					className="set-text-box"
					onChange={ setItemText } />
				<button
					tabIndex="0"
					className="item-btn"
					onClick={ AddToList }
					disabled={ ( itemText === '' || itemText === undefined) ? 'disabled' : '' }>Add</button>
			</div>
			<div className="list-item-panel">
			{
				list.map( ( item, idx ) => (
					<div key={ idx } className="list-item">
						<div>
							{ item.id } :: { item.text }
						</div>
						<div>
							<button
								tabIndex="0"
								className="item-btn"
								onClick={ DeleteTodoItem }
								value={ item.id }>Delete</button>
						</div>
					</div>
					) )
				}
			</div>
		</div>
	);
};

export default App;