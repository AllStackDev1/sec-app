import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorLayout extends Component {
  componentDidMount() {
    document.title = 'Complete Farmer | Page Not Found!';
  }

  render() {
    return (
      <>
        <div className="error-container">
          <main>
            <div className="mx-auto h-100">
              <img src="/assets/img/sadface.gif" alt="sad Face" />
              <p className="font-weight-bold">{`{"error": "Oops! Something went wrong."}`}</p>
              <p>
                If you're experiencing a critical issue, please{' '}
                <a
                  href="mailto:support@completefarmer.com?Subject=Help%20with%20dashboard"
                  target="_top"
                  className="font-weight-bold"
                >
                  email support.
                </a>
              </p>
              <p className="font-weight-bold">
                <Link to="/">Find your way back</Link>
              </p>
            </div>
          </main>
        </div>
      </>
    );
  }
}
export default ErrorLayout;
