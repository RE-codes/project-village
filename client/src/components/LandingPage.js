import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-overlay">
        <Container>
          <Row>
            <Col md="12" className="text-center">
              <h1 className="display-3 text-light mb-4">Project Village</h1>
              <p className="lead text-light">
                A network for families. Let's lean on each other, because{' '}
                <em>"it takes a village..."</em>
              </p>
              <Button
                outline
                color="primary"
                size="lg"
                className="m-3 landing-button"
              >
                Sign Up
              </Button>
              <Button
                outline
                color="secondary"
                size="lg"
                className="m-3 landing-button"
              >
                Login
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
