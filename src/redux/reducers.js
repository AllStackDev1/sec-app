import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUser from './auth/reducer';
// import dashboardReducers from './dashboard/reducer';

const reducers = combineReducers({
  authUser,
  loadingBar: loadingBarReducer
});

export default reducers;
