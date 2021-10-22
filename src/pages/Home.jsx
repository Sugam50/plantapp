import React from "react";
import Crousel from "../components/Crousel";
import "../Style/Home.css";
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
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
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
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Rajul Koshta</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
                <Button variant="light">
                  <Linkedin />
                </Button>
                <Button variant="light">
                  <GitHub />
                </Button>
                <Button variant="light">
                  <Twitter />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Sugam Agrawal</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
                <Button variant="light">
                  <Linkedin />
                </Button>
                <Button variant="light">
                  <GitHub />
                </Button>
                <Button variant="light">
                  <Twitter />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Abhay</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ButtonGroup>
                <Button variant="light">
                  <Linkedin />
                </Button>
                <a href="https://github.com/tabhay563">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <Button variant="light">
                  <Twitter />
                </Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
