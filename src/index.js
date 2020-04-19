import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('GET_MOVIES', getMovieSaga);
    yield takeEvery('GET_DETAILS', getDetailSaga);
    yield takeEvery('UPDATE_MOVIE', updateMovieSaga);
}

//function to route all movies request
function* getMovieSaga(action) {
    try {
        let response = yield axios.get('/api/movies')
        console.log(response.data)
        yield put({
            type: 'SET_MOVIES',
            payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

function* getDetailSaga(action) {
    try {
        let response = yield axios.get(`/api/movies/${action.payload}`)
        console.log(response.data)
        yield put({
            type: 'GET_DETAILS',
            payload: response.data
        })
    } catch (error) {
        console.log('error in detail saga',error);
    }
}


function* updateMovieSaga(action) {
    try {
        let response = yield axios.put(`/api/movies/+${action.payload.id}`)
        console.log(response.data);
        yield put({
            type: 'GET_MOVIES',
            payload: response.data
        })
    } catch (error) {
        console.log('Error in update',error);
    }
}






// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}


// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const update = (state= [], action) => {
    switch (action.type) {
        case 'UPDATE_MOVIE':
            return [...state, action.payload];
        default:
            return state;
    }
}

const details = (state= [], action) => {
    switch (action.type) {
        case 'GET_DETAILS':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state =-1, action) => {
    switch (action.type) {
        case 'CURRENT_MOVIE':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        update,
        details,
        movie,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
