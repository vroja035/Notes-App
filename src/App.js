import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  //gets the saved notes
  useEffect(() => {
    
    const savedNotes = JSON.parse(localStorage.getItem('notes-app-data'));
    const prevMode = JSON.parse(localStorage.getItem('notes-app-dark-mode'));

    if(savedNotes){
      setNotes(savedNotes);
    }

    if(prevMode){
      setDarkMode(prevMode);
    }

  }, []);

  //saves the current notes and dark/light mode choice
  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('notes-app-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);


  //add, delete, pin, and edit note functions
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString([], {month:'2-digit', day:'2-digit', year:'numeric'}) + ' ' + date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);

  };

  const editNote = (id, newText) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, text: newText } : note
    );
    setNotes(updatedNotes);
  };

  const pinNote = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, isPinned: !note.isPinned } : note
    );
    setNotes(updatedNotes);
  };

  const deleteAllNotes = () => {
    setNotes([]);
  };


  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>

      <div className='container'>

        <Header handleToggleDarkMode={setDarkMode}
                handleDeleteAllNotes={deleteAllNotes}/>
        <Search handleSearchNote = {setSearchText}/>

        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
          handlePinNote={pinNote}
        />

      </div>
  
    </div>
  );
};

export default App;