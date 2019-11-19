import MainReducer from "../reducer/mainReducer";
import {applyMiddleware, createStore, compose} from 'redux';
import {mainSaga} from "./mainSaga";
import createSagaMiddleware from 'redux-saga';

const enhancers = [];

if (process.env.NODE_ENV === 'development') {
    const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;
    if (typeof devTools === 'function') {
        enhancers.push(devTools())
    }
}

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(applyMiddleware(sagaMiddleware), ...enhancers);

const store = createStore(MainReducer, composedEnhancers);

sagaMiddleware.run(mainSaga);

export default store;