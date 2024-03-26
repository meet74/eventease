import { configureStore, combineReducers } from '@reduxjs/toolkit';
import EventReducer from './reducer/EventReducer';

const reducers = combineReducers({
    event: EventReducer,
    
  });
  // creating Store
  const store = configureStore({
    reducer: reducers,
  });
  

  export default store;