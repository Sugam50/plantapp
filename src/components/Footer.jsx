import React from 'react';
import { GitHub, Linkedin, Twitter} from "react-feather";
import {Button, ButtonGroup } from "react-bootstrap";

function Footer() {
    return (
        <footer id="sticky-footer" className="flex-shrink-0 py-4 bg-dark text-white-50">
        <div className="container text-center">
         <div>
         <ButtonGroup>
              <a href="/">
                 <Button variant="dark">
                  <Linkedin />
                 </Button>
                </a>
                <a href="https://github.com/Sugam50/plantapp">
                <Button variant="light">
                  <GitHub />
                </Button>
                </a>
                <a href="/">
                <Button variant="dark">
                  <Twitter />
                </Button>
                </a>
        </ButtonGroup>
        </div>
          <small>Copyright &copy; plantify | 2021</small>
        </div>
      </footer>
    )
}

export default Footer
