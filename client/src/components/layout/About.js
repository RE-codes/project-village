import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-page-overlay">
        <Container>
          <Row className="about-tagline">
            <Col md="8">
              <h1 className="display-4 text-light">It takes a village...</h1>
            </Col>
          </Row>
          <Row className="about-text">
            <Col />
            <Col md="6" className="text-light text-left">
              <h1 className="text-light">About Project Village</h1>
              <p className="lead">
                Project Village came about as an effort to use social networking
                to the advantage of families, particularly parents. There are
                frequent and common necessities that all parents share.
              </p>
              <p className="lead">
                {' '}
                Project Village is aimed at providing an avenue through which
                families can rely on each other to help address these needs.
                From childcare to pet sitting, carpooling to borrowing everyday
                items, Project Village helps provide a way to bring families
                together to make life a little easier for everyone.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
