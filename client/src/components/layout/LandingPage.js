import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SignUp from '../auth/SignUp';
import Login from '../auth/Login';

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <div className="landing-page-overlay">
          <Container>
            <Row className="vertical-center">
              <Col md="12" className="text-center">
                <h1 className="display-3 text-light mb-4">Project Village</h1>
                <p className="lead text-light pb-2">
                  A network for families. Let's lean on each other, because{' '}
                  <em>"it takes a village..."</em>
                </p>
                <hr className="landing-page-divider" />
                <SignUp isSignUpOpen={false} isLoginOpen={false} />
                <Login initialModalState={false} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default LandingPage;
