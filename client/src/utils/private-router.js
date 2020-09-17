import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { checkAuth } from './check-auth';

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      checkAuth() === true ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signup',
          }}
        />
      )
    }
  />
);
