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
          <img src={logo} className="box" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <div className="container">
            <ol>
              <li className="message">one</li>
              <li className="success">two</li>
              <li className="error">three</li>
              <li className="warning">four</li>
            </ol>
          </div>
            <article>try me </article>
            <aside>badaboom</aside>
        </header>
      </div>
    );
  }
}

export default App;
