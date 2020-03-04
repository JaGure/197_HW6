import React from 'react'
import ReactDom from 'react-dom'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

import App from './components/App'


const defaultState = []

const reducer = (state = defaultState, action) => {
    const stateCopy = state.slice()
    switch (action.type) {
        case 'ADD_NEW_POST':
            const {post} = action
            if(post.parentIndex === -1) { // top level
                stateCopy.push(post)
            } else if(post.ancestorIndex === -1) { // first level
                stateCopy[post.parentIndex].responses.push(post)
            } else { // reply to reply
                stateCopy[post.ancestorIndex].responses[post.parentIndex].responses.push(post)
            }
            break;
    }
    return stateCopy
}

const store = createStore(reducer)

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
    document.getElementById('root')
)