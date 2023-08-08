import { MdDeleteForever, MdModeEdit, MdMoreHoriz, MdPushPin, } from 'react-icons/md';
import { useState } from 'react';

const Note = ({id, text, date, isPinned, handleDeleteNote, handleEditNote, handlePinNote}) => {

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

    const handlePinClick = () =>{
        handlePinNote(id);
        setMenuStatus(false);   
    }


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
                   {isPinned ? (

                    <><MdPushPin className='pin-icon2' size='1em'/><small><i>{date}</i></small></>    

                   ):(

                    <small><i>{date}</i></small>   

                   )}              
    
                    <div className='menu-container'>

                        <MdMoreHoriz
                            onClick={toggleMenu}
                            className='menu-icon'
                            size='1.3em'
                        />

                        {menuStatus && (
                            <div className='menu-popup'>

                                <MdPushPin
                                    onClick={handlePinClick}
                                    className='pin-icon'
                                    size='1.3em'
                                />
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