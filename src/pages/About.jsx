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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
              <a href="https://www.linkedin.com/in/rajulkoshta/">
                 <Button variant="light">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/rajulkoshta">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/RajulKoshta">
                <Button variant="light">
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
              <a href="https://linkedin.com/sugam50">
                 <Button variant="light">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/sugam50">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/sugam50">
                <Button variant="light">
                  <Twitter />
                </Button>
                </a>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card className="Card" style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/89150017?v=4/100px180" />
            <Card.Body>
              <Card.Title>Abhay</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
                <a href="https://linkedin.com/tabhay563">
                 <Button variant="light">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/tabhay563">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="https://twitter.com/tabhay563">
                <Button variant="light">
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
