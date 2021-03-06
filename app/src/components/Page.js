import React from 'react';
import Component from './Component';

class Page extends React.Component {
    render() {
        const { template } = this.props;

        console.log('##################');
        console.log(template.components.length);
        return (
            <React.Fragment>
                {template.components && template.components.map((c, i) => <Component component={c} key={i} />)}
            </React.Fragment>
        );
    }
}

export default Page;