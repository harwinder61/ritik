import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import signupReducers from '../reducers/signupReducers';

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers(
{ signupReducers }
);
const configureStore = () => {
    return createStore(rootReducer,applyMiddleware(sagaMiddleware));
}


sagaMiddleware.run()
export default configureStore;