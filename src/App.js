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
      
      <Row className="mt-10">
        <Col className = "d-flex justify-content-end hamburger-btn">
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
          <div className="hamburger-bar"></div>
        </Col>
      </Row>
      <Row className="mt-10">
        <Col className = "d-flex justify-content-end hamburger-btn">
          <h1 className="text-center">Foods4Dudes</h1>
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
