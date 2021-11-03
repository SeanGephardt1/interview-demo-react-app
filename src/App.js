import React, { useState }from 'react';
import { RootDiv } from './styles.js';
import './index.css';

function App()
{
	const [ count, setCount ] = useState( 0 );
	const [ itemText, setItemText ] = useState( '' );
	const [ list, addToList ] = useState( [] );

	function AddToList(ev)
	{
		//	console.debug( 'start', count, itemText.target.value, list);
		//	NOT NEEDED setItemText( itemText.target.value );

		let _c = count;
		let _new = {
			id: _c,
			text: itemText.target.value
		};
		_c++;

		setCount( _c );
		addToList( [...list, _new] );

		//	console.debug( 'end', count, list, _new );
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
		<RootDiv>
			<header>Keller Williams React Demo</header>
			<div>
				<input type="text" onChange={ setItemText } />
				<button onClick={ AddToList } >Add</button>
			</div>
			{
				list.map( ( item, idx ) => (
					<div key={ idx }>
						<div>
							{ item.id } :: { item.text }
						</div>
						<div>
							<button onClick={ DeleteTodoItem } value={ item.id }>Delete</button>
						</div>
					</div>
					) )
			}
		</RootDiv>
	);
};

export default App;