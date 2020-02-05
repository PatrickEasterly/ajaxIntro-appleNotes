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
            notes: [
                {
                    id: '1',
                    title: 'First note',
                    copy: 'la la la',
                },
                {
                    id: '22',
                    title: 'second note',
                    copy: 'ba ba ba',
                },
                {
                    id: '333',
                    title: 'third note',
                    copy: 'ha ha ha',
                },
                {
                    id: '4444',
                    title: 'fourth note',
                    copy: 'fa fa fa',
                },
            ]
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
                <NotesList 
                notes={this.state.notes}
                />
                <NoteEditor />
            </div>
        )
    }

    _setSearchText=(searchText)=> {
        this.setState({
            searchText
        }, ()=> {
            console.log(searchText)
        })
    }
}

export default NotesApp;