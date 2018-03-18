import React from 'react';

class Atom extends React.Component {
    render() {
        const {component} = this.props;

        return <h1>{component.name}</h1>;
    }
}

export default Atom;