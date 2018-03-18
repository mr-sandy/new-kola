import React from 'react';
import ReactDOM from 'react-dom';
import createStoreFunction from './configureStore';
import Root from './components/Root';
import reducer from './reducers';
import { AppContainer } from 'react-hot-loader';
import { initialiseComponents } from './initialiseComponents';
import './css/index.scss';

const initialState = {};

initialiseComponents();

const store = createStoreFunction(reducer, initialState);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('root')
    );
}

render(Root);

if (module.hot) {
    module.hot.accept('./components/Root', () => {
        const NextRoot = require('./components/Root').default;
        render(NextRoot);
    });
}