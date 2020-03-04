import React, { useState } from 'react'

import UpvoteCounter from './UpvoteCounter'
import NewPost from './NewPost'

const Response = props => {
    const {response, index, parentIndex, depth, responses} = props
    const [displayNewPostBox, setDisplayNewPostBox] = useState(false)

    const name = response.name
    const post = response.post

    if(depth > 3) {
        return null
    }

    return (
        <div id={"response" + depth}>
            <div id="responseBody">
                <div id="responseText">
                    <h6>{name}</h6>
                    <p>{post}</p>
                </div>
                <UpvoteCounter />
            </div>
            <div>
                {responses.map((response, i) => <Response response={response} key={i} index={i} parentIndex={index} depth={depth + 1} responses={responses[i].responses}/>)}
            </div>
            {depth < 3 ? <button onClick={e => setDisplayNewPostBox(true)}>Reply</button> : null}
            {displayNewPostBox ?
                <div>
                    <NewPost parentIndex={index} ancestorIndex={parentIndex} parentName={"@" + name + " "} setDisplay={setDisplayNewPostBox}/>
                </div> : null
            }
        </div>
    )
}

export default Response