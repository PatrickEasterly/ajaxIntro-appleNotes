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
                <SearchBar
                text={this.state.searchText}
                handleChange={this._setSearchText}
                />
                <NotesList />
                <NoteEditor />
            </div>
        )
    }

    _setSearchText=(searchText)=> {
        this.setState({
            searchText
        }, ()=> {
            console.log('f')
        })
    }
}

export default NotesApp;