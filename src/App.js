import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <Container className="">
      
      <Row className="">
        <Col className = "d-flex justify-content-end hamburger-btn">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </Col>
      </Row>
      <Row className="">
        < Col className = "justify-content-center">
          <InputGroup className="">
            <FormControl id="recipe-search" />
          </InputGroup>
        </Col>
        <Col className="">
          <Button>Search</Button>
        </Col>
      </Row> 
    </Container>
    
  );
}

export default App;
