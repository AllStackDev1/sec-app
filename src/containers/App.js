import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import MainRoute from 'Routes';
// import login from 'Routes/layouts/login';
// import signup from 'Routes/layouts/signup';
// import accountSuccess from 'Routes/layouts/account-success';
import error from 'Routes/layouts/error';
// import forgotPassword from 'Routes/layouts/forgot-password';
// import verification from 'Routes/layouts/verification';
// import 'react-perfect-scrollbar/dist/css/styles.css';

const InitialPath = ({ component: Component, authUser, ...props }) => {
  return (
    <Route
      {...props}
      render={innerProps =>
        authUser ? (
          <Component {...innerProps} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

class App extends Component {
  render() {
    const { location, match, user } = this.props;
    if (
      location.pathname === '/' ||
      location.pathname === '/app' ||
      location.pathname === '/app/'
    ) {
      return <Redirect to="/app/dashboard" />;
    }
    return (
      <>
        <Switch>
          <Route path="/app" component={MainRoute} />

          {/* <InitialPath path={`${match.url}app`} authUser={user} component={MainRoute} />
          <Route path="/login" component={login} />
          <Route path="/signup" component={signup} />
          <Route path="/forgot-password" component={forgotPassword} />
          <Route path="/account-success" component={accountSuccess} />
          <Route path="/verification" component={verification} /> */}
          <Route path="/error" component={error} />
          <Redirect to="/error" />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user } = authUser;
  return { user };
};

export default connect(
  mapStateToProps,
  {}
)(App);
