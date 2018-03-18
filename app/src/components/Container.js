import React from 'react';
import Component from './Component';

class Container extends React.Component {
    render() {
        const { component } = this.props;

        return (
            <div>
                <h1>{component.name}</h1>
                {component.children && component.children.map((c, i) => <Component component={c} key={i} />)}
            </div>
        );
    }
}

export default Container;