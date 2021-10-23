import React from "react";
import Crousel from "../components/Crousel";
import "../Style/Home.css";
import {Link} from 'react-router-dom';
import { Card} from "react-bootstrap";
import CountUp from "react-countup";
import About from "./About";

function Home() {
  return (
    <div className="Home">
      <Crousel />
      <div className="Intro" id="Intro">
        <h1> About Our project</h1>
        <p>
        Plantify is the Project that solves the real world problem like Global warming, Climate change and Deforestation.
        

The fun part is we can save our plant and help others simultaneously.

Example: Person A have money but dont have time to give back to the nature, here comes person b who has time but want to earn money. So A can donate the money through our Website and If B wants money he can do this by planting a tree and recording the video of that and submit to website for review phase if review got pass B can got money that A has donated.

In this way A is helping B as well as Nature in the same time.
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
         <About/>
        </div>
      </div>
    </div>
  );
}

export default Home;
