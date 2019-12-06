import React from "react";
import { Container, Row, Col, Button } from "shards-react";
function Dashboard(props) {
  return (
    <Container className="displayContainer">
      <Row>
        <Col>
          <Button onClick={() => props.addBalls()} theme="warning">
            Ball
          </Button>
        </Col>
        <Col>
          <Button onClick={() => props.addStrikes()} theme="danger">
            Strike
          </Button>
        </Col>
        <Col>
          <Button theme="dark" onClick={() => props.addStrikes()}>
            Foul
          </Button>
        </Col>
        <Col>
          <Button onClick={() => props.setToZero()} theme="success">
            Hit
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
