import React from 'react';
import Atom from './Atom';
import Container from './Container';

class Component extends React.Component {
    render() {
        const { component } = this.props;

        switch (component.type) {
            case 'atom':
                return <Atom component={component} />;

            case 'container':
                return <Container component={component} />;

            default:
                return false;
        }
    }
}

export default Component;