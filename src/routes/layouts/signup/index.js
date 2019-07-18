import React, { Component } from 'react';
import { Row, Card, CardBody, CardTitle, CardText, FormGroup } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

import LaddaButton, { EXPAND_RIGHT } from 'react-ladda';
import LoadingBar from 'react-redux-loading-bar';
import IntlTelInput from 'react-intl-tel-input';

import Layout from 'Components/Layout';
import { Colxx } from 'Components/CustomBootstrap';

import PasswordInput from 'Containers/PasswordInput';

import 'react-intl-tel-input/dist/main.css';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import { userSignupRequest, resetAuthPropsStateRequest } from 'Redux/actions';

class SignUpLayout extends Component {
  constructor() {
    super();
    this.state = {
      errorMsg: ''
    };
  }

  componentDidMount() {
    document.title = 'Complete Farmer | Signup';
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
                    <CardTitle>Sign up to start farming</CardTitle>
                    <CardText>
                      Already have an account? <Link to="/login">Log in here</Link>
                    </CardText>
                    {this.props.error && (
                      <Layout.ErrorMessage
                        error={this.props.error}
                        message={`Please provide correct sign up details and try again.`}
                      />
                    )}
                    <Formik
                      initialValues={{
                        email: '',
                        password: '',
                        firstName: '',
                        lastName: '',
                        phoneNumber: '',
                        country: '',
                        confirmPassword: ''
                      }}
                      validate={values => {
                        let errors = {};
                        if (!values.firstName) {
                          errors.firstName = 'First name required';
                        }
                        if (!values.lastName) {
                          errors.lastName = 'Last name required';
                        }
                        if (!values.email) {
                          errors.email = 'Email required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                          errors.email = 'Invalid email address';
                        }
                        if (!values.phoneNumber) {
                          errors.phoneNumber = 'Phone number required';
                        } else if (
                          !/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/i.test(
                            values.phoneNumber
                          )
                        ) {
                          errors.phoneNumber = 'Invalid phone number';
                        }
                        if (!values.password) {
                          errors.password = 'Password required';
                        } else if (values.password.length < 8) {
                          errors.password = 'Password must be at least 8 characters';
                        }
                        if (values.password !== values.confirmPassword) {
                          errors.confirmPassword = "Passwords don't match try again";
                        }
                        return errors;
                      }}
                      onSubmit={(values, { setSubmitting }) => {
                        const userSignupDetails = {
                          firstName: values.firstName.trim(),
                          lastName: values.lastName.trim(),
                          email: values.email.trim(),
                          phoneNumber: values.phoneNumber.trim(),
                          country: values.country.trim(),
                          password: values.password,
                          type: 'personal'
                        };
                        this.props.userSignupRequest(userSignupDetails, this.props.history);
                        setSubmitting(false);
                      }}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        setFieldTouched,
                        setFieldValue,
                        handleSubmit,
                        isSubmitting
                      }) => (
                        <Form onSubmit={handleSubmit}>
                          <FormGroup>
                            <Field
                              type="text"
                              name="firstName"
                              placeholder="First Name"
                              value={values.firstName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`form-control ${
                                errors.firstName && touched.firstName ? 'is-invalid' : 'valid'
                              }`}
                            />
                            <span className="form-error">
                              {errors.firstName && touched.firstName && errors.firstName}
                            </span>
                          </FormGroup>
                          <FormGroup>
                            <Field
                              type="text"
                              name="lastName"
                              placeholder="Last Name"
                              value={values.lastName}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`form-control ${
                                errors.lastName && touched.lastName ? 'is-invalid' : 'valid'
                              }`}
                            />
                            <span className="form-error">
                              {errors.lastName && touched.lastName && errors.lastName}
                            </span>
                          </FormGroup>
                          <FormGroup>
                            <Field
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`form-control ${
                                errors.email && touched.email ? 'is-invalid' : 'valid'
                              }`}
                            />
                            <span className="form-error">
                              {errors.email && touched.email && errors.email}
                            </span>
                          </FormGroup>
                          <FormGroup>
                            <IntlTelInput
                              fieldName="phoneNumber"
                              fieldId="phoneNumber"
                              defaultCountry="gh"
                              inputClassName={`form-control ${
                                errors.phoneNumber && touched.phoneNumber ? 'is-invalid' : 'valid'
                              }`}
                              onPhoneNumberBlur={(status, value, countryData) => {
                                setFieldTouched('phoneNumber', true);
                                setFieldValue('phoneNumber', value);
                                setFieldValue(
                                  'country',
                                  countryData.name.split(' (', 1).toString()
                                );
                                if (!status) {
                                  setFieldValue('phoneNumber', 'error');
                                }
                              }}
                              onPhoneNumberChange={(status, value, countryData) => {
                                setFieldTouched('phoneNumber', true);
                                setFieldValue('phoneNumber', value);
                                setFieldValue(
                                  'country',
                                  countryData.name.split(' (', 1).toString()
                                );
                                if (!status) {
                                  setFieldValue('phoneNumber', 'error');
                                }
                              }}
                              style={{ display: 'block' }}
                            />
                            <div className="form-error">
                              {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                            </div>
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
                          <FormGroup>
                            <PasswordInput
                              name={'confirmPassword'}
                              placeholder={'Confirm Password'}
                              value={values.confirmPassword}
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
                            Sign Up
                          </LaddaButton>
                          <div className="text-center pt-2">
                            <p>
                              By clicking the “<b>Sign Up</b>” button, you are creating a Complete
                              Farmer account, and you agree to Complete Farmer’s{' '}
                              <a href="https://www.completefarmer.com/terms">Terms of Use</a>
                              {' and '}
                              <a href="https://www.completefarmer.com/terms">Privacy Policy.</a>
                            </p>
                          </div>
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
    userSignupRequest,
    resetAuthPropsStateRequest
  }
)(SignUpLayout);
