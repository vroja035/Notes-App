import { MdDeleteForever, MdModeEdit } from 'react-icons/md';
import { useState } from 'react';

const Note = ({id, text, date, handleDeleteNote, handleEditNote}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(text);
    const characterLimit = 250;

    const handleEditClick = () =>{
        setIsEditing(true);
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

                <small>{date}</small>

                {isEditing ? (
                    <>
                    <small>{characterLimit - editedText.length} Remaining</small>

                    <button className='save' onClick={handleSaveClick}>
                        Save
                     </button>
                    </>

                ) : (
                <>
                    <MdDeleteForever 
                        onClick = {() => handleDeleteNote(id)} 
                        className = 'delete-icon' 
                        size='1.3em' 
                    />

                    <MdModeEdit
                        onClick = {handleEditClick}
                        className = 'delete-icon' 
                        size='1.3em' 
                    />
                </>
                )}      

            </div>

        </div>
    );
};

export default Note;