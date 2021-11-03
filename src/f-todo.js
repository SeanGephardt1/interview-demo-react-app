import React, { useState } from 'react';

function FuncToDo()
{
	const [ count, setCount ] = useState( 0 );
	const [ inputValue, setInputValue ] = useState( "" );
	const [ list, setToDoList ] = useState( [] );

	function AddToList( ev )
	{
		console.debug( 'AddToList', ev );

		let _c = count;
		let _new = {
			id: _c,
			text: inputValue.target.value
		};
		_c++;

		//	inputValue.target.value = "";

		setCount( _c );
		setInputValue( "" );
		setToDoList( [ ...list, _new ] );
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
		let _sliced_array = list.filter( ( item =>
		{
			return item.id !== parseInt(ev.target.value);
		} ) );
		setToDoList( [ ..._sliced_array] );
		return;
	};
	return (
		<>
			<div className="demo-text">Function style component using React Hooks</div>
			<div>count: { count }</div>
			<div>list: { list.length }</div>
			<div>inputValue: {}</div>
			<div className="add-list-panel">
				<form action="#" onSubmit={ ClearAll }>
				<input
					type="text"
					tabIndex="0"
					placeholder="Add an item to the list"
					className="set-text-box"
					onChange={ setInputValue }
					/>
				<button
					tabIndex="0"
					className="item-btn"
					onClick={ AddToList }
					disabled={ ( inputValue === '' ) ? 'disabled' : '' }>Add</button>
				<button
					tabIndex="0"
					className="item-btn"
					style={ { 'marginLeft': '10px'}}
					onClick={ ClearAll }
						disabled={ ( list.length > 0 ) ? '' : 'disabled' }>Clear All</button>
				</form>
			</div>
			<div className="list-item-panel">
			{
				list.map( ( item, idx ) => (
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