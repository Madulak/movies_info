import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import MovieReducer from './store/reducer';
import Navigation from './navigation';

const  root = combineReducers({
  movies: MovieReducer,
})

const store = createStore(root, applyMiddleware(ReduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style='dark' backgroundColor='white' />
      <Navigation />
    </Provider>
  );
}


