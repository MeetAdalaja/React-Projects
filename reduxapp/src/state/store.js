import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import thunk from 'redux-thunk';


const store = configureStore({
  reducer: rootReducer,
  preloadedState: {},
  middleware: [thunk]
});

export default store;
// video 76 min 5