import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';


function App() {
  return (
    <Container className="p-3">
      <FormComp/>
    </Container>
  )
}

function FormComp() {
  return (
    <>
    <InputGroup className="mb-3">
      <Form.Control
        id="username"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
      />
      <Button variant="outline-secondary" id="loginbtn">
        Button
      </Button>
    </InputGroup>
    </>
    )
}


export default App
