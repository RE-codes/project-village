import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const currentUser = JSON.parse(localStorage.getItem('user'));

  return (
    <Route
      {...rest}
      render={props =>
        currentUser && currentUser.id === user.user.id ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(PrivateRoute);
