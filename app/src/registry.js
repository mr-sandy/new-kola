import React from 'react';

const components = {};

const fakeComponent = ({ children }) => (
    <React.Fragment>
        {children}
    </React.Fragment>
);

export const register = (name, Component) => {
    components[name] = Component;
}

export const getComponent = name => {
    const component = components[name];

    if (component) {
        return component;
    }

    console.log('faking it - ' + name);
    return fakeComponent;
}