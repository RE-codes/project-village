import React from 'react';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-page-overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h1 className="display-3 text-light mb-4">Project Village</h1>
              <p className="lead text-light">
                A network for families. Let's lean on each other, because{' '}
                <em>"it takes a village..."</em>
              </p>
              <button className="btn btn-lg btn-outline-primary m-3 landing-button">
                Sign Up
              </button>
              <button className="btn btn-lg btn-outline-secondary m-3 landing-button">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
