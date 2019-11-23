import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ButtonToolbar>
          <Button variant="primary">Primary</Button> 
          <Button variant="secondary">Secondary</Button> 
          <Button variant ="success">Success</Button> 
          <Button variant="warning">Warning</Button> 
          <Button variant="danger">Danger</Button> 
          <Button variant="info">Info</Button> <Button variant="light">Light</Button> 
          <Button variant="dark">Dark</Button> 
          <Button variant="link">Link</Button> 
         </ButtonToolbar>
          <Button variant="success">Success</Button>
        <p>
          Edit <code>src/App.js</code> and save to reload.<br />
          hi mom.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
