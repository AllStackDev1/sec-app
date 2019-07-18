import React, { Component } from 'react';
import { Row, Card, CardBody, CardTitle, CardText, CardLink, Button, Alert } from 'reactstrap';
import LoadingBar from 'react-redux-loading-bar';
import Layout from 'Components/Layout';
import { Colxx } from 'Components/CustomBootstrap';
import { connect } from 'react-redux';
import { verifyEmailRequest, resetAuthPropsStateRequest } from 'Redux/actions';

class VerificationLayout extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.props.message) return (document.title = `CompleteFarmer | Verification Successful`);
  }

  componentDidMount() {
    const { search } = this.props.location;
    if (search) {
      document.title = `CompleteFarmer | Verifying Email... Please Wait!`;
      let query = search.slice(1).split('&&', 2);
      this.props.verifyEmailRequest(query[1], query[0]);
      document.getElementById('verification-card').scrollIntoView();
      document.getElementById('verification-card').focus();
      document.body.classList.add('background');
    } else {
      this.props.history.push('/login');
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('background');
    this.props.resetAuthPropsStateRequest();
  }

  render() {
    return this.props.loading ? (
      <div className="loading" />
    ) : (
      <>
        <Layout.FixedBackground />
        <LoadingBar
          style={{
            position: 'fixed',
            zIndex: 1,
            backgroundColor: '#bcd823'
          }}
        />
        <div className="layout-container" tabIndex={0} id="verification-card">
          <main>
            <Layout.Heading />
            <Row className="layout-card h-100">
              <Colxx xxs={12} sm={8} md={6} lg={4} className="mx-auto">
                <Card>
                  {this.props.error !== null ? (
                    <CardBody className="verification-error-message">
                      <Layout.ErrorMessage error={this.props.error} message={`Error Occur!.`} />
                      <CardLink href="/login" className="btn btn-primary">
                        Login
                      </CardLink>
                    </CardBody>
                  ) : (
                    <CardBody className="verification-success-message">
                      <CardTitle>Congratulations!</CardTitle>
                      <CardText>Your account has been activated successfully</CardText>
                      <CardLink href="/account-setup" className="btn btn-primary">
                        Next >
                      </CardLink>
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
  const { loading, message, error } = authUser;
  return { loading, message, error };
};

export default connect(
  mapStateToProps,
  {
    verifyEmailRequest,
    resetAuthPropsStateRequest
  }
)(VerificationLayout);
