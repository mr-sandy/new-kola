import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

export default function createStoreFunction(reducer, initialState) {

    const middleware = applyMiddleware(thunkMiddleware);

    const enhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV !== 'production'
        ? compose(
            middleware,
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        : compose(
            middleware);

    return createStore(reducer, initialState, enhancers);
};