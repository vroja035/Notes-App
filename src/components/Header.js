import React from 'react';
import { useState } from 'react';
import { MdSettings } from 'react-icons/md';

//header with dark/mode button and title
const Header = ({handleToggleDarkMode, handleDeleteAllNotes}) => {

    const [settingsStatus, setSettingsStatus] = useState(false);

    const toggleSettings = () => {
        setSettingsStatus(!settingsStatus);
      };


    return(
        <div className='header'>
            <h1>Notes</h1>
            <button onClick={()=> handleToggleDarkMode((previousDarkMode) => !previousDarkMode )} 
            className='save'> Toggle Mode </button>
            <div className='settings-container'>
                <MdSettings
                    onClick={toggleSettings}
                    className='menu-icon'
                    size='1.3em'
                />
                {settingsStatus && (
                            <div className='settings-popup'>

                                <button className='delete-all' onClick={handleDeleteAllNotes}> <b> Delete All </b></button>
                                
                            </div>
                        )}

            </div>


        </div>
    )
};

export default Header;