import React, { useState } from 'react';

function FuncToDo()
{
    const [ inputValue, setInputValue ] = useState( "" );

    // Input Field handler
    function handleUserInput( e )
    {
        setInputValue( e.target.value );
    };

    // Reset Input Field handler
    function resetInputField ()
    {
        setInputValue( "" );
    };

    return (
        <div>
            {/* Input Field */ }
            <input type="text" value={ inputValue } onChange={ handleUserInput } />

            {/* Reset button */ }
            <button onClick={ resetInputField }>Reset</button>
        </div>
    );
};
export default FuncToDo;