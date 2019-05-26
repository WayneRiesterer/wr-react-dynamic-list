import React, { Component } from 'react';
import './App.css';

import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    inputText: ''
  };

  inputTextChangedHandler = (event) => {
    this.setState({ inputText: event.target.value });
  };

  charClickedHandler = (index) => {
    let charArray = this.state.inputText.split('');
    charArray.splice(index, 1);
    const newText = charArray.join('');
    this.setState({ inputText: newText });
  };

  render() {
    const charList = this.state.inputText.split('').map((char, index) => {
      return <Char
        key={index}
        character={char}
        clicked={this.charClickedHandler.bind(this, index)} />;
    });

    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
            className="App-logo" alt="logo" />
          <h1 className="App-title">React: Dynamic Lists</h1>
          <p>Wayne Riesterer - 2018</p>
          <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/?couponCode=ACADEMIND_REACT"
            target="_blank">React Course on Udemy</a>
        </header>
        <p className="App-intro">
          Enter Some Text<br />
          Click on the <span className="highlighted-text">Blue</span> Characters to Remove
        </p>
        <div className="box">
          <input type="text" onChange={this.inputTextChangedHandler}
            value={this.state.inputText} />
          <p>Length: {this.state.inputText.length}</p>
          <Validation textLength={this.state.inputText.length} />
        </div>
        {this.state.inputText.length > 0 ?
          <div className="box">{charList}</div> : undefined
        }
      </div>
    );
  }
}

export default App;