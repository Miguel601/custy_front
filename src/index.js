import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'


//Redux uses a Pub/sub pattern. Component can subscribe to get state updates from the store

/* to create the store , we need a reducer. The reducer is a giant if/else function that dictates how our store can update the state of our app*/
/*The reducer shouild accept two arguments. the current state and an action(object) */

const reducer = (state, action) => {
    return state
}

const store = createStore(reducer)




ReactDOM.render(

    <Provider store={store}>
        <App />
    </ Provider>,
    
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
