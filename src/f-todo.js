import React, { useState } from 'react';

function FuncToDo()
{
	const [ count, setCount ] = useState( 0 );
	const [ inputValue, setInputValue ] = useState( "" );
	const [ toDoList, setToDoList ] = useState( [] );

	function AddToList( ev )
	{
		console.debug( 'AddToList' );

		let _c = count;
		let _new = {
			id: _c,
			text: inputValue
		};
		_c++;

		setCount( _c );
		setInputValue( "" );
		setToDoList( [ ...toDoList, _new ] );
		return;
	};
	function ClearAll( ev )
	{
		console.debug( 'ClearAll', ev );
		setCount( 0 );
		setInputValue( "" );
		setToDoList( [] );
		return;
	};
	function DeleteTodoItem( ev )
	{	//	console.debug( 'DeleteTodoItem', ev.target.value );
		let _sliced_array = toDoList.filter( ( item =>
		{
			return item.id !== parseInt(ev.target.value);
		} ) );
		setToDoList( [ ..._sliced_array] );
		return;
	};
	return (
		<>
			<div className="demo-text">Function style component using React Hooks</div>

			{ /*
			<div>count: { count }</div>
			<div>toDoList: { toDoList.length }</div>
			<div>inputValue: { inputValue }</div>
			 */ }

			<div className="add-list-panel">
				<input
					type="text"
					tabIndex="0"
					placeholder="Add an item to the list"
					className="set-text-box"
					value={ inputValue }
					onChange={ (e) =>
					{	//	THIS HACKY CRAP
						//	console.debug( e.currentTarget.value );
						setInputValue( e.target.value );
						return;
					} }
					/>
				<button
					tabIndex="0"
					className="item-btn"
					onClick={ AddToList }
					disabled={ ( inputValue.length === 0 ) ? 'disabled' : '' }>Add</button>
				<button
					tabIndex="0"
					className="item-btn"
					style={ { 'marginLeft': '10px'}}
					onClick={ ClearAll }
					disabled={ ( toDoList.length > 0 ) ? '' : 'disabled' }>Clear All</button>
			</div>
			<div className="list-item-panel">
			{
					toDoList.map( ( item, idx ) => (
					<div key={ idx } className="list-item">
						<div>{ item.id } :: { item.text }</div>
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
		</>
	);
};
export default FuncToDo;