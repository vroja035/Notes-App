import Note from './Note';
import AddNote from './AddNote';

//returns the list of notes
const NotesList = ({ notes, handleAddNote, handleDeleteNote, handleEditNote, handlePinNote }) => {
    
    const pinnedNotes = notes.filter((note) => note.isPinned);
    const unpinnedNotes = notes.filter((note) => !note.isPinned);
    
    
    return(
        <div className='notes-list'>
            {pinnedNotes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    isPinned={note.isPinned}
                    handleDeleteNote = {handleDeleteNote}
                    handleEditNote={handleEditNote} 
                    handlePinNote={handlePinNote}
                />
            ))}
            {unpinnedNotes.map((note) => (
                <Note 
                    id={note.id} 
                    text={note.text} 
                    date={note.date}
                    isPinned={note.isPinned}
                    handleDeleteNote = {handleDeleteNote}
                    handleEditNote={handleEditNote} 
                    handlePinNote={handlePinNote}
                />
            ))}

            <AddNote handleAddNote = {handleAddNote} />
        </div>
    );
};

export default NotesList;