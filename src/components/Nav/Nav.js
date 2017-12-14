import React from "react";
import Col from "../Bootstrap/Col";
import Container from "../Bootstrap/Container";
import Row from "../Bootstrap/Row";


const Nav = ({score, message, highScore})=>
  <nav className="navbar navbar-inverse navbar-top" style={{height: 110}}>
    <Container>
      <Row>
        <Col size='lg-4'>
          <ul>
            <div className="navbar-header">
              <button type="button" className="collapsed navbar-toggle">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" /> <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a href="/" className="navbar-brand">
                <h3>Clicky Game</h3>
              </a>
            </div>
          </ul>
        </Col>
        <Col size='lg-4'>
          <a className="navbar-brand Message"><h3>{message}</h3></a>
        </Col>
        <Col size='lg-4'>
          <a className="navbar-brand Score">
            <h3>Score: {score} | High Score: {highScore}</h3>
          </a>
        </Col>
      </Row>
    </Container>
  </nav>;

export default Nav;
