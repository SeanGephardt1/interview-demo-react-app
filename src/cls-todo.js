import React  from 'react';
import './index.css';
//	TODO import AppStyles from './styles.js';

export default class ClassTodo extends React.Component
{
	constructor ( props )
	{
		super( props );
		this.state = {
			count: 0,
			itemText: '',
			list: []
		};
		return;
	};
	OnChange_HandleUserInput( ev )
	{	//	console.debug( 'OnChange_HandleUserInput', ev.target.value );
		this.setState( { itemText: ev.target.value } );
		return;
	};
	OnClick_AddToList( ev )
	{	//	console.debug( 'OnClick_AddToList', ev );
		let _c = this.state.count;
		let _new_list = this.state.list;

		let _new = {
			id: _c,
			text: this.state.itemText
		};

		_c++;
		_new_list.push( _new );

		this.setState( {
			count: _c,
			itemText: '',
			list: _new_list
		} );
		return;
	};
	OnClick_DeleteTodoItem( ev )
	{	//	console.debug( 'OnClick_DeleteTodoItem', ev.target.value );
		let _sliced_array = this.state.list.filter( ( item =>
		{
			return item.id !== parseInt( ev.target.value );
		} ) );

		this.setState( { list: _sliced_array } );
		return;
	};
	OnClick_ClearAll( ev )
	{	//	console.debug( 'OnClick_ClearAll', ev );
		this.setState( {
			count: 0,
			itemText: '',
			list: []
		} );
		return;
	};
	render()
	{
		return ( <>
			<div className="demo-text">Class style component using React setState</div>

			{ /*
			<div>count: { this.state.count }</div>
			<div>toDoList: { this.state.list.length }</div>
			<div>itemText: { this.state.itemText }</div>
			 */}

			<div className="add-list-panel">
				<input
					type="text"
					tabIndex="0"
					placeholder="Add an item to the list"
					className="set-text-box"
					onChange={ this.OnChange_HandleUserInput.bind( this ) }
					value={ this.state.itemText } />
				<button
					tabIndex="0"
					className="item-btn"
					onClick={ this.OnClick_AddToList.bind( this ) }
					disabled={ ( this.state.itemText === '' ) ? 'disabled' : '' }>Add</button>
				<button
					tabIndex="0"
					className="item-btn"
					style={ { 'marginLeft': '10px' } }
					onClick={ this.OnClick_ClearAll.bind( this ) }
					disabled={ ( this.state.list.length > 0 ) ? '' : 'disabled' }>Clear All</button>
			</div>
			<div className="list-item-panel">
				{
					this.state.list.map( ( item, idx ) => (
						<div key={ idx } className="list-item">
							<div>{ item.id } :: { item.text }</div>
							<div>
								<button
									tabIndex="0"
									className="item-btn"
									onClick={ this.OnClick_DeleteTodoItem.bind( this ) }
									value={ item.id }>Delete</button>
							</div>
						</div>
					) )
				}
			</div>
		</> );
	};
};