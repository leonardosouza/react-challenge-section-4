import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import InputField from './InputField/InputField';
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    inputField: {
      value: '',
      size: 0,
    },
  };

  changeTextHandler = e => {
    let value = e.target.value;
    let size = e.target.value.length;
    this.setState({ inputField: { value, size } });
  };

  removeLetterHandler = id => {
    let value = [...this.state.inputField.value];
    value.splice(id, 1);
    const size = value.length;
    this.setState({ inputField: { value: value.join(''), size } });
  }

  render() {
    let style = {
      input: {
        border: '2px solid',
        width: '90%',
        lineHeight: '2.5',
        padding: '5px',
      },
      output: {
        fontStyle: 'italic',
      },
      letter: {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '8px',
        border: '1px solid black',
      },
    };

    return (
      <div className="App">
        <h1>Challenge</h1>
        <InputField change={this.changeTextHandler} style={style.input} />
        <ValidationComponent
          size={this.state.inputField.size}
          style={style.output}
        />
        <CharComponent
          style={style.letter}
          text={this.state.inputField.value}
          click={this.removeLetterHandler}
        />
      </div>
    );
  }
}

export default App;
