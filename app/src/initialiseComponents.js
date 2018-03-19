import React from 'react';
import { register } from './registry';
import marked from 'marked';
import { Helmet } from "react-helmet";

const inner = ({ children }) => <React.Fragment>{children}</React.Fragment>;

export const initialiseComponents = () => {
    register('html-head', inner);
    register('html-body', inner);
    register('html', ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} ></div>);
    register('division', ({ children, ...props }) => <div className={getClassNames(props)}>{children}</div>);
    register('inner', ({ children, ...props }) => <div className={getClassNames(props)}>{children}</div>);
    register('footer', ({ children, ...props }) => <footer className={getClassNames(props)}>{children}</footer>);
    register('section', ({ children, ...props }) => <section className={getClassNames(props)}>{children}</section>);
    register('navigation', ({ children, ...props }) => <nav className={getClassNames(props)}>{children}</nav>);
    register('anchor', ({ text, children, ...props }) => <a className={getClassNames(props)}>{text}{children}</a>);
    register('markdown', ({ markdown }) => <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>);
    register('html-title', ({ title }) => <Helmet><title>{title}</title></Helmet>);
    register('html-metadata', ({ name, content }) => <Helmet><meta name={name} content={content} /></Helmet>);
    register('html-link', ({ type, rel, href, sizes, media }) => <Helmet><link type={type} rel={rel} href={'https://small.linncdn.com/website/' + href} sizes={sizes} media={media} /></Helmet>);
    register('span', ({ text, ...props }) => <span className={getClassNames(props)}>{text}</span>);
    register('text', ({ text }) => <span>{text}</span>);
    register('list', ({ children, ...props }) => <ul className={getClassNames(props)}>{children}</ul>);
    register('list-item', ({ children, ...props }) => <li className={getClassNames(props)}>{children}</li>);
    register('html-script', ({ id, type, src, content }) => <script id={id} type={type} src={'https://small.linncdn.com/wensite/' + src}>{content}</script>);
    register('button', ({ children, ...props }) => <button className={getClassNames(props)}>{children}</button>);
}

const getClassNames = props => {
    const pairs = Object.entries(props);

    var classes = pairs.map(p => getClasses(p[0], p[1])).flatten();

    return classes.join(' ');
}

const getClasses = (name, value) => {
    switch (name) {
        case 'grid-placement':
            return getGridPlacement(value);
        default:
            return [];
    }
}

const getGridPlacement = valueStr => {
    
    if (!valueStr) {
        return [];
    }

    const value = JSON.parse(valueStr);
    console.log(value);
    console.log(value.length);

    return value.reduce((soFar, item) => {
        const grid = item.grid;

        if (item.hidden) {
            return [...soFar, `${grid}-hidden`];
        }

        if (item.position) {

            if (item.position === '1-12'){
                return [...soFar, `${grid}-all`];
            }

            const columns = item.position.split('-');

            if (columns[0]) {
                if (columns[1]) {
                    return [...soFar, `${grid}${columns[0]}-${grid}${columns[1]}`];
                }

                return [...soFar, `${grid}${columns[0]}`];
            }
        }
        return soFar;
    }, []);
}