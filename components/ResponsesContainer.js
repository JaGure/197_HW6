import React from 'react'
import {connect} from 'react-redux'

import Response from './Response'

const ResponseContainer = props => {
    const {reduxItems} = props
    // console.log(reduxItems)
    return (
        <div>
            {reduxItems.map((response, i) => <Response response={response} key={i} index={i} parentIndex={-1} depth={1} responses={reduxItems[i].responses}/>)}
        </div>
    )
}

const mapReduxStateToProps = state => {
    return {
        reduxItems: state
    }
}

export default connect(mapReduxStateToProps)(ResponseContainer)