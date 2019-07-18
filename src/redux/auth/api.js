import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.withCredentials = true;

const NO_AUTH = {
  headers: { 'Content-Type': 'application/json' }
};

const WITH_AUTH = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('token'),
    'Content-Type': 'application/json'
  }
};

export const signupAsync = async userData => {
  return await axios.post('/signup', userData, NO_AUTH);
};

export const loginAsync = async (email, password) => {
  return await axios.post('/login', { email, password }, NO_AUTH);
};

export const logoutAsync = async _id => {
  return await axios.post('/logout', _id, WITH_AUTH);
};

export const verifyEmailAsync = async ({ email, token }) => {
  return await axios.patch(
    `/account/settings/verification/${email}`,
    { token, access: 'validation' },
    NO_AUTH
  );
};

export const passwordResetAsync = async email => {
  return await axios.post('/account/settings/password/reset', { email }, NO_AUTH);
};

export const resendVerificationEmailAsync = async email => {
  return await axios.get(`/account/settings/verification/${email}`, NO_AUTH);
};

export const uploadPassport = async image => {
  return await axios.post('/users/setup-id', { image }, WITH_AUTH);
};

export const updateBankDetails = async data => {
  return await axios.patch('/users/banking-details/update', data, WITH_AUTH);
};
