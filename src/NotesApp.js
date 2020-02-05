import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: 'This is the Search Text',

        }
    }
    render() {
        return (
            <div>
                <h1>Notes App </h1>
                <NewNote />
                <SearchBar />
                <NotesList />
                <NoteEditor />
            </div>
        )
    }

}

export default NotesApp;