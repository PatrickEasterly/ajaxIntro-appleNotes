import React from 'react';

class NoteEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            changedNote: {}
        }
    }
    
    // Recieving the new props and the existing state 
    static getDerivedStateFromProps(props, state){
        // Returns the new version of state.
        console.log('Get derived state from props')
        console.table(props.note)
        console.table(state.changedNote)

        if (props.note.id === state.changedNote.id) {
            return {
                ...state
            } 
        } else {
            return {
                ...state,
                changedNote: {
                    ...props.note
                }
            }
        }


    }

    render () {
    
        return (
            <div>
                <input 
                    value={this.state.changedNote.title} 
                    onChange={(event) => {
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            title: event.target.value
                        });
                    }}
                />
                <br />
                <textarea 
                    value={this.state.changedNote.copy} 
                    onChange={(event) => {
                        this._updateLocalNote({
                            ...this.state.changedNote,
                            copy: event.target.value,
                            
                        });
                    }}
                />
            </div>
        );
    }

    _updateLocalNote=(changedNote)=> {
        this.setState({
            changedNote
        })
    }
}



export default NoteEditor;