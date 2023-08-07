import React from 'react';

//header with dark/mode button and title
const Header = ({handleToggleDarkMode}) => {
    return(
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=> handleToggleDarkMode((previousDarkMode) => !previousDarkMode )} 
            className='save'> Toggle Mode </button>
        </div>
    )
};

export default Header;