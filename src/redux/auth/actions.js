import {
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAILED,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAILED,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAILED,
  USER_PASSWORD_RESET_REQUEST,
  USER_PASSWORD_RESET_SUCCESS,
  USER_PASSWORD_RESET_FAILED,
  RESEND_VERIFICATION_EMAIL_REQUEST,
  RESEND_VERIFICATION_EMAIL_SUCCESS,
  RESEND_VERIFICATION_EMAIL_FAILED,
  UPLOAD_PASSPORT_REQUEST,
  UPLOAD_PASSPORT_SUCCESS,
  UPLOAD_PASSPORT_FAILED,
  UPDATE_BANK_DETAILS_REQUEST,
  UPDATE_BANK_DETAILS_SUCCESS,
  UPDATE_BANK_DETAILS_FAILED,
  RESET_PROPS_STATE_REQUEST
} from 'Constants/actionTypes';

export const userSignupRequest = (user, history) => ({
  type: USER_SIGNUP_REQUEST,
  payload: { user, history }
});
export const userSignupSuccess = email => ({
  type: USER_SIGNUP_SUCCESS,
  payload: email
});
export const userSignupFailed = error => ({
  type: USER_SIGNUP_FAILED,
  payload: error
});

export const userLoginRequest = (user, history) => ({
  type: USER_LOGIN_REQUEST,
  payload: { user, history }
});
export const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  payload: user
});
export const userLoginFailed = error => ({
  type: USER_LOGIN_FAILED,
  payload: error
});

export const userLogoutRequest = (history, _id) => ({
  type: USER_LOGOUT_REQUEST,
  payload: { history, _id }
});
export const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS
});

export const verifyEmailRequest = (email, token) => ({
  type: VERIFY_EMAIL_REQUEST,
  payload: { email, token }
});
export const verifyEmailSuccess = authUser => ({
  type: VERIFY_EMAIL_SUCCESS,
  payload: authUser
});
export const verifyEmailFailed = error => ({
  type: VERIFY_EMAIL_FAILED,
  payload: error
});

export const userPasswordResetRequest = email => ({
  type: USER_PASSWORD_RESET_REQUEST,
  payload: email
});
export const userPasswordResetSuccess = response => ({
  type: USER_PASSWORD_RESET_SUCCESS,
  payload: response
});
export const userPasswordResetFailed = error => ({
  type: USER_PASSWORD_RESET_FAILED,
  payload: error
});

export const resendVerificationEmailRequest = email => ({
  type: RESEND_VERIFICATION_EMAIL_REQUEST,
  payload: email
});
export const resendVerificationEmailSuccess = message => ({
  type: RESEND_VERIFICATION_EMAIL_SUCCESS,
  payload: message
});
export const resendVerificationEmailFailed = error => ({
  type: RESEND_VERIFICATION_EMAIL_FAILED,
  payload: error
});

export const uploadPassportRequest = image => ({
  type: UPLOAD_PASSPORT_REQUEST,
  payload: { image }
});
export const uploadPassportSuccess = response => ({
  type: UPLOAD_PASSPORT_SUCCESS,
  payload: response
});
export const uploadPassportFailed = error => ({
  type: UPLOAD_PASSPORT_FAILED,
  payload: error
});

export const updateBankDetailsRequest = data => ({
  type: UPDATE_BANK_DETAILS_REQUEST,
  payload: { data }
});
export const updateBankDetailsSuccess = message => ({
  type: UPDATE_BANK_DETAILS_SUCCESS,
  payload: message
});
export const updateBankDetailsFailed = error => ({
  type: UPDATE_BANK_DETAILS_FAILED,
  payload: error
});

export const resetAuthPropsStateRequest = () => ({
  type: RESET_PROPS_STATE_REQUEST
});
