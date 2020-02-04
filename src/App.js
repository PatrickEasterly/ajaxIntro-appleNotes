import React from 'react';
import './App.css';
import One from './One';
import Two from './Two';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: ''
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <One />
          <Two />
        </header>
      </div>
    )
  }
  _doMath=()=>{
    
  }
}


export default App;