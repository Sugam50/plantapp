import React from "react";
import "../Style/Plantor.css";
import {Form} from 'react-bootstrap';

function Plantor() {
  return (
    <div className="Plantor">
        <h1>Welcome to plantation drive</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
    </div>
  );
}

export default Plantor;
