import MainReducer from "../reducer/mainReducer";
import {applyMiddleware, createStore, compose} from 'redux';
import {mainSaga} from "./mainSaga";
import createSagaMiddleware from 'redux-saga';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__();

const sagaMiddleware = createSagaMiddleware();
const composedEnhancers = compose(applyMiddleware(sagaMiddleware), devTools);

const store = createStore(MainReducer, composedEnhancers);

sagaMiddleware.run(mainSaga);

export default store;