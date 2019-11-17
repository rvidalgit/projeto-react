import MainReducer from "../reducer/mainReducer";
import {applyMiddleware, createStore, compose} from 'redux';
import {mainSaga} from "./mainSaga";
import createSagaMiddleware from 'redux-saga';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__;

/*if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}*/
const enhancers = [];
if (typeof devTools === 'function') {
    enhancers.push(devTools())
}

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(applyMiddleware(sagaMiddleware), ...enhancers);

const store = createStore(MainReducer, composedEnhancers);

sagaMiddleware.run(mainSaga);

export default store;