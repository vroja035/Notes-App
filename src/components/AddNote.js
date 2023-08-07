import { useState } from 'react';

const AddNote = ({ handleAddNote }) => {
    
    //add note handlers
    const [noteText, setNoteText] = useState('');
    const characterLimit = 250;

    const handleChange = (event) => {
        if(characterLimit - event.target.value.length >= 0){
            setNoteText(event.target.value);
        }
        
    };

    const handleSaveClick = () => {
        if(noteText.trim().length > 0){
            handleAddNote(noteText);
            setNoteText('');
        }           
    };
    
    return (<div className = 'note new'>
        <textarea 
            rows = '8' 
            cols = '10'
            placeholder = 'Type to add a note...'
            value={noteText}
            onChange = {handleChange}
            ></textarea>
            <div className='note-footer'>
                <small><b>{characterLimit - noteText.length} Remaining</b></small>
                <button className = 'save' onClick={handleSaveClick}><b> Save </b></button>
            </div>
        </div>
    );
};

export default AddNote;