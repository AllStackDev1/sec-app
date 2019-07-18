import React, { Component } from 'react';
import { Alert, Row, Card, CardBody, CardTitle, FormGroup } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';
import LoadingBar from 'react-redux-loading-bar';
import { Link } from 'react-router-dom';

import Layout from 'Components/Layout';
import { Colxx } from 'Components/CustomBootstrap';

import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import { userPasswordResetRequest, resetAuthPropsStateRequest } from 'Redux/actions';

class ForgotPasswordLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    document.title = 'Complete Farmer | Login';
    document.body.classList.add('background');
    this.props.resetAuthPropsStateRequest();
  }

  componentWillUnmount() {
    document.body.classList.remove('background');
  }

  componentDidUpdate() {
    if (this.props.error) {
      document.getElementById('form-card').scrollIntoView();
      document.getElementById('form-card').focus();
    }
  }

  render() {
    return (
      <>
        <Layout.FixedBackground />
        <LoadingBar style={{ position: 'fixed', zIndex: 1, backgroundColor: '#bcd823' }} />
        <div className="layout-container" tabIndex={0} id="form-card">
          <main>
            <Layout.Heading />
            <Row className="layout-card h-100">
              <Colxx xxs={12} sm={8} md={6} lg={4} className="mx-auto">
                {/* <Alert
                  isOpen={this.state.visible}
                  toggle={() => this.setState({ visible: false })}
                >
                  Thank you for your request. If your email address matches any
                  records with us, we will send you an email with instructions
                  to reset your password.
                </Alert> */}
                <Card>
                  <CardBody>
                    <CardTitle>
                      Enter the registered account email address below to reset your password.
                    </CardTitle>
                    {this.props.error && (
                      <Layout.ErrorMessage
                        error={this.props.error}
                        message={`Please provide valid email address and try again.`}
                      />
                    )}
                    <Formik
                      initialValues={{ email: '' }}
                      validate={values => {
                        let errors = {};
                        if (!values.email) {
                          errors.email = 'Email required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                          errors.email = 'Invalid email address';
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        this.props.resetAuthPropsStateRequest();
                        this.props.userPasswordResetRequest(values.email);
                        setSubmitting(false);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              className={`form-control ${errors.email ? 'is-invalid' : 'invalid'}`}
                            />
                            <span className="form-error">
                              {errors.email && touched.email && errors.email}
                            </span>
                          </FormGroup>
                          <LaddaButton
                            type="submit"
                            className="reset-password-button btn-ladda"
                            loading={this.props.buttonLoading}
                            data-style={EXPAND_RIGHT}
                            disabled={isSubmitting}
                            onClick={() => this.setState({ visible: true })}
                          >
                            Request Password Reset
                          </LaddaButton>
                          <Link to="/login" className="float-right my-2">
                            Want to Login?
                          </Link>
                        </Form>
                      )}
                    </Formik>
                  </CardBody>
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
  const { buttonLoading, error } = authUser;
  return { buttonLoading, error };
};

export default connect(
  mapStateToProps,
  {
    userPasswordResetRequest,
    resetAuthPropsStateRequest
  }
)(ForgotPasswordLayout);
