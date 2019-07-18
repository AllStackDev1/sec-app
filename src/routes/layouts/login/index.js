import React, { Component } from 'react';
import { Row, Card, CardBody, CardTitle, CardText, FormGroup } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';
import LoadingBar from 'react-redux-loading-bar';
import { Link } from 'react-router-dom';

import Layout from 'Components/Layout';
import { Colxx } from 'Components/CustomBootstrap';

import PasswordInput from 'Containers/PasswordInput';

import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import { userLoginRequest, resetAuthPropsStateRequest } from 'Redux/actions';

class LoginLayout extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: ''
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.error) {
      document.getElementById('form-card').scrollIntoView();
      document.getElementById('form-card').focus();
    }
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
                  <CardBody>
                    <CardTitle>Login to continue farming</CardTitle>
                    <CardText>
                      Don't have an account? <Link to="/signup">Sign up here</Link>
                    </CardText>
                    {this.props.error && (
                      <Layout.ErrorMessage
                        error={this.props.error}
                        message={`Please provide correct login details and try again.`}
                      />
                    )}
                    <Formik
                      initialValues={{ email: '', password: '' }}
                      validate={values => {
                        let errors = {};
                        if (!values.email) {
                          errors.email = 'Email required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                          errors.email = 'Invalid email address';
                        }
                        if (!values.password) {
                          errors.password = 'Password required';
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        const userLoginDetails = {
                          email: values.email,
                          password: values.password
                        };
                        this.props.resetAuthPropsStateRequest();
                        this.props.userLoginRequest(userLoginDetails, this.props.history);
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
                              className={`form-control ${
                                errors.email && touched.email ? 'is-invalid' : 'valid'
                              }`}
                            />
                            <span className="form-error">
                              {errors.email && touched.email && errors.email}
                            </span>
                          </FormGroup>
                          <FormGroup>
                            <PasswordInput
                              name={'password'}
                              placeholder={'Password'}
                              value={values.password}
                              handleChange={handleChange}
                              handleBlur={handleBlur}
                              errors={errors}
                              touched={touched}
                            />
                          </FormGroup>
                          <LaddaButton
                            type="submit"
                            className="register-button btn-ladda"
                            loading={this.props.buttonLoading}
                            data-style={EXPAND_RIGHT}
                            disabled={isSubmitting}
                          >
                            Login
                          </LaddaButton>
                          <Link to="/forgot-password" className="float-right my-2">
                            Forgot password?
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
    userLoginRequest,
    resetAuthPropsStateRequest
  }
)(LoginLayout);
