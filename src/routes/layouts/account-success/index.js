import React, { Component } from 'react';
import { Row, Card, CardBody, CardTitle, CardText, CardLink } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Layout from 'Components/Layout';
import { Colxx } from 'Components/CustomBootstrap';

import 'ladda/dist/ladda-themeless.min.css';
import { resetAuthPropsStateRequest, resendVerificationEmailRequest } from 'Redux/auth/actions';

class AccountSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resendClicked: false,
      error: null
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('email')) {
      document.title = 'Complete Farmer | Account Created';
      document.body.classList.add('background');
      this.props.resetAuthPropsStateRequest();
    } else {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('background');
  }

  handleClick = e => {
    e.preventDefault();
    if (localStorage.getItem('email')) {
      this.setState({ resendClicked: true });
      this.props.resendVerificationEmailRequest(localStorage.getItem('email'));
    } else {
      this.setState({ error: 'No email found' });
      setTimeout(() => {
        this.props.history.push('/');
      }, 3000);
    }
  };

  renderResendBlock(message) {
    return (
      <CardBody>
        <CardTitle>
          <h4>
            {message ? (
              message
            ) : (
              <>
                <i className="fas fa-spinner" /> Resending Email...
              </>
            )}
          </h4>
        </CardTitle>
        {message && (
          <div className="d-flex justify-content-around">
            <Link to="/support-help" className="btn btn-secondary d-flex">
              Need Help
              <i className="material-icons">contact_support</i>
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login >
            </Link>
          </div>
        )}
      </CardBody>
    );
  }

  render() {
    return (
      <>
        <Layout.FixedBackground />
        <LoadingBar style={{ position: 'fixed', zIndex: 5, backgroundColor: '#bcd823' }} />
        <div className="layout-container" tabIndex={0} id="form-card">
          <main>
            <Layout.Heading />
            <Row className="layout-card h-100">
              <Colxx xxs={12} sm={8} md={6} lg={4} className="mx-auto">
                <Card>
                  {this.state.resendClicked ? (
                    this.renderResendBlock(this.props.message || this.props.error)
                  ) : (
                    <CardBody>
                      <CardTitle>
                        <h2>Welcome to Complete Farmer</h2>
                      </CardTitle>
                      {this.state.error && (
                        <Layout.ErrorMessage
                          error={this.state.error}
                          message={'Unauthorized access... Redirecting in 3s!'}
                        />
                      )}

                      <CardText>
                        You are almost done. Just click the confirmation link we just sent in your
                        e-mail and complete the registration process.
                      </CardText>
                      <CardText>
                        Don't forget to check your spam box in case it has been filtered out.
                      </CardText>
                      <CardText style={{ margin: '1rem 0' }}>
                        Didn't receive an email?{' '}
                        <CardLink href="javascript:void(0)" onClick={this.handleClick}>
                          Resend confirmation
                        </CardLink>
                      </CardText>
                    </CardBody>
                  )}
                </Card>
              </Colxx>
            </Row>
          </main>
          <Layout.Footer />
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ authUser }) => {
  const { user, message, error } = authUser;
  return { user, message, error };
};

export default connect(
  mapStateToProps,
  { resetAuthPropsStateRequest, resendVerificationEmailRequest }
)(AccountSuccess);
