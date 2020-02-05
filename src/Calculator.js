import React from 'react';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            num1: 0,
            num2: 0,
            result: 0
        };
    }
    render() {
        return (
            <div>
                <h1>The best calculator ever.</h1>
                <input 
                    type="number" 
                    value={this.state.num1} 
                    onChange={(event) => {
                        this._updateNumber('num1', event.target.value);
                    }}
                />
                <input 
                    type="number" 
                    value={this.state.num2} 
                    onChange={(event)=> {
                        this._updateNumber('num2', event.target.value);
                    }}
                />
                <br />
                <br />
                <button onClick={this._add}>+</button>
                <button onClick={this._sub}>-</button>
                <button onClick={this._div}>/</button>
                <button onClick={this._mul}>*</button>
                <br />
                <div>{this.state.result}</div>
            </div>
        );
    }

    _updateNumber = (key, newNumber) => {
        this.setState({
            [key]: parseInt(newNumber, 10)
        });
    }

    _add = () => {
        const result = this.state.num1 + this.state.num2;
        // debugger;
        this.setState({
            result
        })
    }

    _sub = () => {
        const result = this.state.num1 - this.state.num2;
        // debugger;
        this.setState({
            result
        })
    }

    _div = () => {
        const result = this.state.num1 / this.state.num2;
        // debugger;
        this.setState({
            result
        })
    }

    _mul = () => {
        const result = this.state.num1 * this.state.num2;
        // debugger;
        this.setState({
            result
        })
    }

}

export default Calculator;