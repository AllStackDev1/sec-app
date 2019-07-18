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

const INIT_STATE = {
  user: localStorage.getItem('authUser'),
  buttonLoading: false,
  loading: false,
  message: null,
  error: null
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case RESET_PROPS_STATE_REQUEST:
      return { ...state, error: null };
    case USER_SIGNUP_REQUEST:
      return { ...state, buttonLoading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, user: action.payload, buttonLoading: false };
    case USER_SIGNUP_FAILED:
      return { ...state, error: action.payload, buttonLoading: false };
    case USER_LOGIN_REQUEST:
      return { ...state, buttonLoading: true };
    case USER_LOGIN_SUCCESS:
      return { ...state, user: action.payload, buttonLoading: false };
    case USER_LOGIN_FAILED:
      return { ...state, error: action.payload, buttonLoading: false };
    case USER_LOGOUT_REQUEST:
      return { ...state, _id: action.payload, loading: true };
    case USER_LOGOUT_SUCCESS:
      return { ...state, loading: false };
    case VERIFY_EMAIL_REQUEST:
      return { ...state, loading: true };
    case VERIFY_EMAIL_SUCCESS:
      return { ...state, user: action.payload, loading: false, error: null };
    case VERIFY_EMAIL_FAILED:
      return { ...state, error: action.payload, loading: false, message: null };
    case USER_PASSWORD_RESET_REQUEST:
      return { ...state, buttonLoading: true };
    case USER_PASSWORD_RESET_SUCCESS:
      return { ...state, message: action.payload, buttonLoading: false };
    case USER_PASSWORD_RESET_FAILED:
      return { ...state, error: action.payload, buttonLoading: false };
    case RESEND_VERIFICATION_EMAIL_REQUEST:
      return { ...state, buttonLoading: true };
    case RESEND_VERIFICATION_EMAIL_SUCCESS:
      return { ...state, message: action.payload, buttonLoading: true, error: null };
    case RESEND_VERIFICATION_EMAIL_FAILED:
      return { ...state, error: action.payload, buttonLoading: true, message: null };
    case UPLOAD_PASSPORT_REQUEST:
      return { ...state, buttonLoading: true };
    case UPLOAD_PASSPORT_SUCCESS:
      return { ...state, message: action.payload, buttonLoading: false };
    case UPLOAD_PASSPORT_FAILED:
      return { ...state, error: action.payload, buttonLoading: false };
    case UPLOAD_PASSPORT_REQUEST:
      return { ...state, buttonLoading: true };
    case UPDATE_BANK_DETAILS_REQUEST:
      return { ...state, buttonLoading: true };
    case UPDATE_BANK_DETAILS_SUCCESS:
      return { ...state, message: action.payload, buttonLoading: false };
    case UPDATE_BANK_DETAILS_FAILED:
      return { ...state, error: action.payload, buttonLoading: false };
    default:
      return { ...state };
  }
};
