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
            currentTextField: '',

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
                handleClick={this._selectNoteAndRenderCopy}
                />
                <NoteEditor 
                note={this._getNoteById()}
                />
            </div>
        )
    }

    
    _getNoteById=()=> this.state.notes.find(note=>note.id===this.state.currentNoteId) || {};

    _setTextValue=(newNote)=> {
        let newNoteState = [...this.state.notes]
        
        newNoteState = newNoteState.map(noteObj=>{
            
            if(this.state.currentNoteId === noteObj.id) {
                noteObj.copy = newNote
            } 
            return noteObj
        })
        
        this.setState({
            notes: [...newNoteState],
            currentTextField: newNote
        }, ()=>{
        })

    }

    _setSearchText=(searchText)=> {
        this.setState({
            searchText
        }, ()=> {
            // console.log(searchText)
        })
    }

    _selectNoteAndRenderCopy=(currentNoteId)=>{
        this._selectNote(currentNoteId)
        this._renderNoteCopy(currentNoteId)
    }

    _selectNote=(currentNoteId)=> {
        this.setState({
            currentNoteId
        }, ()=>{
        })
    }

    _renderNoteCopy=(currentNoteId)=>{
        const currentTextField = this._getCurrentTextField(currentNoteId);
        this.setState({
            currentTextField: currentTextField || 'note content not found'
        })
    }

    _getCurrentTextField=(currentNoteId)=>{
        return this.state.notes.filter(note=>{
            return note.id === currentNoteId;
        })[0].copy
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