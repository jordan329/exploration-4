import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul>
            <li><a href="/#">Home</a></li>
            <li><a href="/#">About</a></li>
            <li><a href="/#">Help</a></li>
          </ul>
        </nav>
        <header className="App-header">
        <br></br>
        <br></br>
          <img src={logo} className="original" alt="logo" />
          <br></br>
          <br></br>
          <br></br>
          <img src={logo} className="box" alt="logo" />
          <p>
            Welcome to this Sass tutorial
          </p>
          <div className="container">
            <ol>
              <li className="message">one</li>
              <li className="success">two</li>
              <li className="error">three</li>
              <li className="warning">four</li>
            </ol>
          </div>
          <article className="left">try me </article>
          <aside className="right">badaboom</aside>
        </header>
      </div>
    );
  }
}

export default App;
