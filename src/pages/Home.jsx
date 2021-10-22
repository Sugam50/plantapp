import React from "react";
import Crousel from "../components/Crousel";
import "../Style/Home.css";
import {Link} from 'react-router-dom';
import { Card, Button, ButtonGroup } from "react-bootstrap";
import CountUp from "react-countup";
import { GitHub, Linkedin, Twitter } from "react-feather";

function Home() {
  return (
    <div className="Home">
      <Crousel />
      <div className="Intro" id="Intro">
        <h1> About Our project</h1>
        <p>
          A plantation is a large-scale estate, generally centered on a
          plantation house, meant for farming that specializes in cash crops.The
          crops that are grown include cotton, coffee, tea, cocoa, sugar cane,
          opium, sisal, oil seeds, oil palms, fruits, rubber trees and forest
          trees. Protectionist policies and natural comparative advantage have
          sometimes contributed to determining where plantations are located.
          Among the earliest examples of plantations were the latifundia of the
          Roman Empire, which produced large quantities of grain, wine and olive
          oil for export. Plantation agriculture grew rapidly with the increase
          in international trade and the development of a worldwide economy that
          followed the expansion of European colonialism.
        </p>
      </div>
      <div className="reg_cards">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/900789323908153437/901089190966591490/donate.png" />
          <Card.Body>
            <Card.Title>Want to plant </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/plant">Click Here</Link>
           
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/900789323908153437/901090177760526387/Untitled.png" />
          <Card.Body>
            <Card.Title>Want to Donate</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to="/donor">Click Here</Link>
           
          </Card.Body>
        </Card>
      </div>
      <div className="Overlay">
        <div className="bg">
          <div className="data">
            <h1>Trees planted</h1>
            <CountUp start={0} end={150} duration={3} />
          </div>
          <div className="data">
            <h1>Donors</h1>
            <CountUp start={0} end={80} duration={7} />
          </div>
          <div className="data">
            <h1>Planters</h1>
            <CountUp start={0} end={30} duration={7} />
          </div>
        </div>
      </div>
      <div className="Team" id="Team">
        <h1> Team Members</h1>
        <div className="Members">
          <Card style={{ width: "18rem" }}>
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
          <Card style={{ width: "18rem" }}>
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
          <Card style={{ width: "18rem" }}>
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
      </div>
    </div>
  );
}

export default Home;
