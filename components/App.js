import React from 'react'

import Title from './Title'
import NewPostContainer from './NewPostContainer'
import ResponseContainer from './ResponsesContainer'

const App = () => {
    return (
        <>
            <div id="appContainer">
                <Title/>
                <NewPostContainer/>
                <ResponseContainer/>
            </div>
        </>
    )
}

export default App