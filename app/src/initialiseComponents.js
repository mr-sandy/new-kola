import React from 'react';
import { register } from './registry';
import marked from 'marked';
import { Helmet } from "react-helmet";

const inner = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export const initialiseComponents = () => {
    register('html-head', ({ children }) => { console.log('HELMENT!'); return <Helmet>{children}</Helmet>});
    register('html-body', inner);
    register('html', ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} ></div>);
    register('division', ({ children }) => <div>{children}</div>);
    register('section', ({ children }) => <section>{children}</section>);
    register('navigation', ({ children }) => <nav>{children}</nav>);
    register('anchor', ({ text, children }) => <a>{text}{children}</a>);
    register('markdown', ({ markdown }) => <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>);
    register('html-title', ({ title }) => <title>{title}</title>);
}