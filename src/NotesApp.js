import React from 'react';
import NewNote from './NewNote';
import NotesList from './NotesList';
import NoteEditor from './NoteEditor';
import SearchBar from './SearchBar';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
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
            ],
            currentNoteId: '',

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
                notes={this._getFilteredNotes()}
                handleClick={this._selectNote}
                />
                <NoteEditor />
            </div>
        )
    }

    _setSearchText=(searchText)=> {
        this.setState({
            searchText
        }, ()=> {
            // console.log(searchText)
        })
    }

    _selectNote=(currentNoteId)=> {
        this.setState({
            currentNoteId
        }, ()=>{
            console.log(`This.state Currend id: ${this.state.currentNoteId}`)
        })
    }

    _getFilteredNotes=()=>{
        const filteredArray = this.state.notes.filter(note=> {
            const titleDoesMatch = note.title.toLocaleLowerCase().includes(this.state.searchText);
            const copyDoesMatch = note.copy.toLocaleLowerCase().includes(this.state.searchText);
            return titleDoesMatch || copyDoesMatch;
        });
        return filteredArray;
    }

    

}

export default NotesApp;