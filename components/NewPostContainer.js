import React from 'react'

import NewPost from './NewPost'

const NewPostContainer = () => {
    return (
        <div id="newPostContainer">
            <h3>New Post</h3>
            <NewPost parentIndex={-1} ancestorIndex={-1}/>
        </div>
    )
}

export default NewPostContainer