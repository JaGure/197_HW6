import React, { useState } from 'react'


const UpvoteCounter = () => {
    const [count, setCount] = useState(0)

    const incCount = () => {
        setCount(count + 1)
    }

    const decCount = () => {
        setCount(count - 1)
    }

    return (
        <div id="upvote">
            <button onClick={incCount}>/\</button>
            <p>{count}</p>
            <button onClick={decCount}>\/</button>
        </div>
    )
}

export default UpvoteCounter