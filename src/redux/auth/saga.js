import { call, fork, put, takeEvery } from 'redux-saga/effects';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import {
  USER_LOGIN_REQUEST,
  USER_SIGNUP_REQUEST,
  USER_LOGOUT_REQUEST,
  VERIFY_EMAIL_REQUEST,
  USER_PASSWORD_RESET_REQUEST,
  UPLOAD_PASSPORT_REQUEST,
  UPDATE_BANK_DETAILS_REQUEST,
  RESEND_VERIFICATION_EMAIL_REQUEST
} from 'Constants/actionTypes';
import {
  userLoginSuccess,
  userLoginFailed,
  userSignupSuccess,
  userSignupFailed,
  userLogoutSuccess,
  verifyEmailSuccess,
  verifyEmailFailed,
  userPasswordResetSuccess,
  userPasswordResetFailed,
  resendVerificationEmailSuccess,
  resendVerificationEmailFailed,
  uploadPassportSuccess,
  uploadPassportFailed,
  updateBankDetailsSuccess,
  updateBankDetailsFailed
} from './actions';

import * as Api from './api';

// SIGNUP_REQUEST
function* userSignupRequest({ payload }) {
  try {
    const { history, user } = payload;
    yield put(showLoading());
    const res = yield call(Api.signupAsync, user);
    if (res.data.email) {
      yield put(hideLoading());
      yield put(userSignupSuccess(res.data.email));
      localStorage.setItem('email', res.data.email);
      history.push(`/account-success`);
    } else {
      yield put(userSignupFailed(res.data.error));
    }
  } catch (error) {
    yield put(registerUserFailed('Unexpected error occur!'));
  }
}
export function* watchUserSignup() {
  yield takeEvery(USER_SIGNUP_REQUEST, userSignupRequest);
}

// LOGIN REQUEST
function* userLoginRequest({ payload }) {
  yield put(showLoading());
  const { email, password } = payload.user;
  const { history } = payload;
  try {
    const res = yield call(Api.loginAsync, email, password);
    if (res.data.success) {
      yield put(hideLoading());
      yield put(userLoginSuccess(res.data.authUser));
      localStorage.setItem('authUser', JSON.stringify(res.data.authUser));
      // localStorage.setItem('user_id', res.data.authUser._id);
      // localStorage.setItem('token', res.data.authUser.token);
      // localStorage.setItem('role', res.data.authUser.role);
      // localStorage.setItem('email', res.data.authUser.email);
      // localStorage.setItem('fullname', res.data.authUser.fullname);
      // localStorage.setItem('photoUrl', res.data.authUser.photoUrl);
      if (localStorage.getItem('authUser')) {
        // history.push(`/${res.data.authUser.role}/dashboard`);
        history.push(`/user/dashboard`);
      }
    } else {
      yield put(hideLoading());
      yield put(userLoginFailed(res.data.error));
    }
  } catch (error) {
    yield put(hideLoading());
    // TODO: Add a redirection to an error page
    yield put(userLoginFailed('Unexpected Error Occur, Please Contact Support!'));
  }
}
export function* watchUserLoginRequest() {
  yield takeEvery(USER_LOGIN_REQUEST, userLoginRequest);
}

// LOGOUT_REQUEST
function* userLogoutRequest({ payload }) {
  yield put(showLoading());
  const { history, _id } = payload;
  try {
    const res = yield call(Api.logoutAsync, _id);
    if (res.data.success) {
      yield put(userLogoutSuccess());
      localStorage.removeItem('authUser');
      setTimeout(() => {
        history.push('/login');
      }, 500);
    } else {
      yield put(userLogoutSuccess());
      localStorage.removeItem('authUser');
      setTimeout(() => {
        history.push('/login');
      }, 500);
    }
  } catch (error) {
    yield put(userLogoutSuccess());
    localStorage.removeItem('authUser');
    setTimeout(() => {
      history.push('/login');
    }, 500);
  }
}
export function* watchUserLogoutRequest() {
  yield takeEvery(USER_LOGOUT_REQUEST, userLogoutRequest);
}

// VERIFY EMAIL/USER
function* verifyEmailRequest({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(Api.verifyEmailAsync, payload);
    if (res.data.success) {
      yield put(hideLoading());
      // TODO: store the user in the localstroage
      localstore.setItem('authUser', res.data.authUser);
      yield put(verifyEmailSuccess(res.data.message));
    } else {
      yield put(hideLoading());
      yield put(verifyEmailFailed(res.data.error));
    }
  } catch (error) {
    yield put(hideLoading());
    yield put(verifyEmailFailed('Unexpected Error Occur. Please try again later'));
  }
}
export function* watchUserVerifyEmailRequest() {
  yield takeEvery(VERIFY_EMAIL_REQUEST, verifyEmailRequest);
}

// PASSWORD_RESET_REQUEST
function* userPasswordResetRequest({ payload }) {
  yield put(showLoading());
  try {
    const res = yield call(Api.passwordResetAsync, payload);
    if (res.data.success) {
      yield put(hideLoading());
      yield put(userPasswordResetSuccess(res.data.email));
    } else {
      yield put(hideLoading());
      yield put(userPasswordResetFailed(res.data.error));
    }
  } catch (error) {
    yield put(hideLoading());
    // TODO: Add a redirection to an error page
    yield put(userPasswordResetFailed('Unexpected Error Occur. Please try again later'));
  }
}
export function* watchUserPasswordResetRequest() {
  yield takeEvery(USER_PASSWORD_RESET_REQUEST, userPasswordResetRequest);
}

// RESEND_VERIFICATION_EMAIL_REQUEST
function* resendVerificationEmailRequest({ payload }) {
  yield put(showLoading());
  localStorage.removeItem('email');
  try {
    const res = yield call(Api.resendVerificationEmailAsync, payload);
    if (res.data.success) {
      yield put(hideLoading());
      yield put(resendVerificationEmailSuccess(res.data.message));
    } else {
      yield put(hideLoading());
      yield put(resendVerificationEmailFailed(res.data.error));
    }
  } catch (error) {
    yield put(hideLoading());
    yield put(resendVerificationEmailFailed('Something went wrong; plesase try again.'));
  }
}
export function* watchResendVerificationEmailRequest() {
  yield takeEvery(RESEND_VERIFICATION_EMAIL_REQUEST, resendVerificationEmailRequest);
}

// UPLOAD_PASSPORT_REQUEST
function* uploadPassportRequest({ payload }) {
  yield put(showLoading());
  try {
    const { image } = payload;
    const res = yield call(Api.uploadPassport, image);
    if (res.data.success) {
      yield put(hideLoading());
      yield put(uploadPassportSuccess(response));
    } else {
      yield put(hideLoading());
      yield put(uploadPassortFailed(res.data.error));
    }
  } catch (error) {
    yield put(uploadPassportFailed(error));
  }
}
export function* watchUploadPassportRequest() {
  yield takeEvery(UPLOAD_PASSPORT_REQUEST, uploadPassportRequest);
}

// UPDATE_BANK_DETAILS_REQUEST
function* updateBankDetailsRequest({ payload }) {
  yield put(showLoading());
  try {
    const { data } = payload;
    const res = yield call(Api.updateBankDetails, data);
    if (res.data.success) {
      yield put(updateBankDetailsSuccess(res.data.message));
    } else {
      yield put(updateBankDetailsFailed(res.data.error));
    }
  } catch (error) {
    if (error.res.data.status == 401) {
      // TODO: show flash message and send user to login;
      // yield put(updateBankDetailsFailed(error.error));
    } else {
      yield put(
        updateBankDetailsFailed('Unexpected Error Occur, Please try again or contact support!')
      );
    }
  }
}
export function* watchUpdateBankDetailsRequest() {
  yield takeEvery(UPDATE_BANK_DETAILS_REQUEST, updateBankDetailsRequest);
}

const authSagas = [
  fork(watchUserLoginRequest),
  fork(watchUserLogoutRequest),
  fork(watchUserSignup),
  fork(watchUserVerifyEmailRequest),
  fork(watchUserPasswordResetRequest),
  fork(watchResendVerificationEmailRequest),
  fork(watchUploadPassportRequest),
  fork(watchUpdateBankDetailsRequest)
];

export default authSagas;
