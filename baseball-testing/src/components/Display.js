import React from "react";
import { Container, Row, Col } from "shards-react";
function Display(props) {
  return (
    <Container className="displayContainer">
      <Row>
        <Col>
          <h4>Balls</h4>
          <h4>{props.balls}</h4>
        </Col>
        <Col>
          <h4>Strikes</h4>
          <h4>{props.strikes}</h4>
        </Col>
      </Row>
    </Container>
  );
}

export default Display;
