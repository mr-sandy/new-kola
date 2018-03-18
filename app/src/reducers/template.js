import { warranty } from './big';

const defaultState = {
    components: [
        {
            type: 'atom',
            name: 'h1',
            properties: [
                {
                    name: 'text',
                    value: 'hi there!'
                }
            ]
        },
        {
            type: 'container',
            name: 'div',
            properties: [
                {
                    name: 'padding',
                    value: 'fat'
                }
            ],
            children: [
                {
                    type: 'atom',
                    name: 'h2',
                    properties: [
                        {
                            name: 'text',
                            value: 'welcome to this thing!'
                        }
                    ]
                }
            ]

        }
    ]
}

const template = (prevState = warranty, action) => {
    switch (action.type) {

        default:
            return prevState;
    }
}

export default template;