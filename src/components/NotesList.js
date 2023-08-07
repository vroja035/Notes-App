import Note from './Note';
import AddNote from './AddNote';

//returns the list of notes
const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote }) => {
    return(
        <div className='notes-list'>
            {notes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    handleDeleteNote = {handleDeleteNote}
                    handleEditNote={handleEditNote} 
                />
            ))}

            <AddNote handleAddNote = {handleAddNote} />
        </div>
    );
};

export default NotesList;