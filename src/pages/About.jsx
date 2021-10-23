import React from 'react'
import { GitHub, Linkedin, Twitter} from "react-feather";
import {Card, Button, ButtonGroup } from "react-bootstrap";
import '../Style/About.css'

function About() {
    return (
        <div className="About">
             <Card className="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/77954495?s=400&u=3110e72130bc8a7faee7b2aa39ec2664ff2e748d&v=4" />
            <Card.Body>
              <Card.Title>Rajul Koshta</Card.Title>
              <Card.Text>
                Frontend Developer | Ml and Al enthusiast 
              </Card.Text>
              <ButtonGroup>
              <a href="https://www.linkedin.com/in/rajulkoshta/">
                 <Button variant="dark">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/rajulkoshta">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/RajulKoshta">
                <Button variant="dark">
                  <Twitter />
                </Button>
                </a>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card className="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/71265266?v=4" />
            <Card.Body>
              <Card.Title>Sugam Agrawal</Card.Title>
              <Card.Text>
                Full Stack Developer | AI & Blockcahin enthusiast | Android Developer
              </Card.Text>
              <ButtonGroup>
              <a href="https://linkedin.com/in/sugam50">
                 <Button variant="dark">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/sugam50">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/sugam50">
                <Button variant="dark">
                  <Twitter />
                </Button>
                </a>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card className="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/89150017?v=4/100px180" />
            <Card.Body>
              <Card.Title>Abhay Thakur</Card.Title>
              <Card.Text>
                Frontend Developer | techie  |   Code lover
              </Card.Text>
              <ButtonGroup>
                <a href="https://linkedin.com/in/tabhay563">
                 <Button variant="dark">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/tabhay563">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/tabhay56">
                <Button variant="dark">
                  <Twitter />
                </Button>
                </a>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
    )
}

export default About;
