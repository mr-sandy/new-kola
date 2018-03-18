import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import Page from '../containers/Page';

class Root extends Component {
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Route path="/" component={Page} />
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default Root;