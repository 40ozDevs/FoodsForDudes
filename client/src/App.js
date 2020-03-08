import React from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container className="">
      
      <Row className="mt-10">
        <Col className="d-flex justify-content-end hamburger-btn">
          <div class="container">
            <input id="toggle" type="checkbox" />
            <label class = "toggle-container" for="toggle">
            <span class="button button-toggle"></span> 
           </label>
            <nav class="nav">
              <a class="nav-item" href="">Dashboard</a> 
              <a class="nav-item" href="">History</a>
              <a class="nav-item" href="">Statistics</a> 
              <a class="nav-item" href="">Settings</a>
            </nav> 
            </div>
        </Col>

        <Col className = "d-flex justify-content-end hamburger-btn">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </Col>
      </Row>
      <Row className="mt-10">
        <Col className = "d-flex justify-content-end hamburger-btn">
          <h1 className="text-center" id="title">Foods4Dudes</h1>
          <p className="text-center">It's in the name</p>
        </Col>
      </Row>
      <Row className="mt-100" mt={100}>
        <Col xs={{ span: 6, offset: 3}} className="justify-content-center" md="auto">
          <InputGroup className="">
            <FormControl id="recipe-search" />
          </InputGroup>
        </Col>
        <Col className="" md="auto">
          <Button>Search</Button>
        </Col>
      </Row> 
    </Container>
    
  );
}

export default App;
