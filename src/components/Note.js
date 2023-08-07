import { MdDeleteForever, MdModeEdit, MdMoreHoriz, } from 'react-icons/md';
import { useState } from 'react';

const Note = ({id, text, date, handleDeleteNote, handleEditNote}) => {

    //handlers for editing and popup menu
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const characterLimit = 250;

    const [menuStatus, setMenuStatus] = useState(false);

    const toggleMenu = () => {
        setMenuStatus(!menuStatus);
      };

    const handleEditClick = () =>{
        setIsEditing(true);
        setMenuStatus(false);
    };

    const handleSaveClick = () =>{
        if((editedText).trim().length > 0){
            handleEditNote(id, editedText);
            setIsEditing(false);
        }
    };

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setEditedText(event.target.value);
        }      
    };


    return( 
        <div className='note'>

            {isEditing ? (

                <textarea id='textareaEdit'
                    rows='8'
                    cols='10'
                    value={editedText}
                    onChange = {handleChange}
              />

            ) : (

                <span>{text}</span>

            )}

            <div className='note-footer'>               

                {isEditing ? (
                    <>
                    <small><b>{characterLimit - editedText.length} Remaining</b></small>

                    <button className='save' onClick={handleSaveClick}>
                        <b>Save</b>
                     </button>
                    </>

                ) : (
                <>
                    <small><b>{date}</b></small>

                    <div className='menu-container'>

                        <MdMoreHoriz
                            onClick={toggleMenu}
                            className='menu-icon'
                            size='1.3em'
                        />

                        {menuStatus && (
                            <div className='menu-popup'>

                                <MdModeEdit
                                    onClick = {handleEditClick}
                                    className = 'edit-icon' 
                                    size='1.3em' 
                                />

                                <MdDeleteForever 
                                    onClick = {() => handleDeleteNote(id)} 
                                    className = 'delete-icon' 
                                    size='1.3em' 
                                />
                            </div>
                        )}


                    </div>

                    
                </>
                )}      

            </div>

        </div>
    );
};

export default Note;