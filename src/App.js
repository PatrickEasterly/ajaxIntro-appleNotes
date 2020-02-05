import React from 'react';
import './App.css';
import One from './One';
import Two from './Two';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      second: '',
      answer: '(answer)'
    }
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
          <div>
            <One 
          first={this.state.first}
          _updateOne={this._updateOne}
          />
          <p>{this.state.first}</p>
          <div>
          <button onClick={()=>this._doMath(this.state.first, this.state.second, '+')}><h1>+</h1></button>
          <button onClick={()=>this._doMath(this.state.first, this.state.second, '-')}><h1>-</h1></button>
          <button onClick={()=>this._doMath(this.state.first, this.state.second, '*')}><h1>*</h1></button>
          <button onClick={()=>this._doMath(this.state.first, this.state.second, '/')}><h1>/</h1></button>
          </div>
          <Two 
          second={this.state.second}
          _updateTwo={this._updateTwo}
          />
          <p>{this.state.second}</p>
          </div>
            <h1>=</h1>
          <div id='answer'><h1>{this.state.answer}</h1></div>
          
          <button onClick={this._reset}><h1>Reset</h1></button>
        {/* </header> */}
      </div>
    )
  }
  _doMath=(a, b, sym)=>{
    let one = parseInt(a)
    let two = parseInt(b)
    if(isNaN(one) || isNaN(two)){
      
      this.setState({
        answer: 'Please enter a number.',
        first: '',
        second: '',
      })
      return;
    }
    let theAnswer;
    if(sym === '+') {
      theAnswer = one + two
    }
    if(sym === '-') {
      theAnswer = one - two
    }
    if(sym === '*') {
      theAnswer = one * two
    }
    if(sym === '/') {
      theAnswer = one/two
    }
    this.setState({
      answer: theAnswer
    })
    
  }
  _updateOne=(event)=>{
    this.setState({
      first: event.target.value
    })
  }
  _updateTwo=(event)=>{
    this.setState({
      second: event.target.value
    })
  }
  _reset=()=>{
    this.setState({
      first: '',
      second: '',
      answer: '(answer)'
    })
  }
}


export default App;