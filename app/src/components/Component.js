import React from 'react';
import { getComponent } from '../registry';

const buildProps = ({ properties = [] }) => {
    return properties.reduce((result, p) => {
        result[p.name] = p.value;
        return result;
    }, {});
};

class Component extends React.Component {
    render() {
        const { component } = this.props;

        if (component) {

            const Comp = getComponent(component.name);
            const props = buildProps(component);
            const childComponents = component.children || component.components
            const children = childComponents
                ? childComponents.map((c, i) => <Component component={c} key={i} />)
                : false;

            if (Comp) {
                return (
                    <Comp {...props}>
                        {children}
                    </Comp>
                );
            }

            if (children) {
                return (
                    <React.Fragment>
                        {children}
                    </React.Fragment>
                );
            }
        }

        return false;
    }
}

export default Component;