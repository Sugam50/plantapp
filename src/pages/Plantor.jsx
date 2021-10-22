import React from "react";
import "../Style/Plantor.css";
import { Form, Button, ButtonGroup } from "react-bootstrap";

function Plantor() {
  return (
    <div className="Plantor">
      <h1>Welcome to plantation drive</h1>
      <Form className="form">
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="name" placeholder="Enter FullName" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFile">
          <Form.Label>Enter File</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
        <Form.Group
          controlId="floatingTextarea"
          label="Comments"
          className="mb-3"
        >
          <Form.Control as="textarea" placeholder="Leave a comment here" />
        </Form.Group>
        <ButtonGroup className="ButtonGroup">
        <Button variant="dark" type="submit">
          Submit
        </Button>
        <Button variant="dark" type="reser">
          Reset
        </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}

export default Plantor;
