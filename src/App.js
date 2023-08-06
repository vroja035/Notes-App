import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';


const App = () => {
  
  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

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

  useEffect(() => {
    localStorage.setItem('notes-app-data', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem('notes-app-dark-mode', JSON.stringify(darkMode));
  }, [darkMode]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
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


  return ( 
    <div className={`${darkMode && 'dark-mode'}`}>

      <div className='container'>

        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText}/>

        <NotesList 
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase()))} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          handleEditNote={editNote}
        />

      </div>
  
    </div>
  );
};

export default App;