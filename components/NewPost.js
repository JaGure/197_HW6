import React, { useState } from 'react'
import {connect} from 'react-redux'

const NewPost = props => {
    const {addPost, parentIndex, ancestorIndex, parentName, setDisplay} = props

    const [inputName, setInputName] = useState('')
    const [inputPostText, setInputPostText] = useState(parentName)

    // add post data from form to redux
    const submit = e => {
        e.preventDefault()
        addPost({
            name: inputName,
            post: inputPostText,
            parentIndex: parentIndex,
            ancestorIndex: ancestorIndex,
            responses: []
        })
        setInputName('')
        setInputPostText('')

        // making sure that this is newpost in the response tree
        if(parentIndex !== -1) {
            setDisplay(false)
        }
    }

    return  (
        <>
        <form id="newPostForm" onSubmit={e => submit(e)}>
            <input value={inputName} onChange={e => setInputName(e.target.value)} type="text" placeholder="Name..."/>
            <textarea value={inputPostText} onChange={e => setInputPostText(e.target.value)} type="text" placeholder="Write a new post..."/>
            <div id="newPostButtonBox">
                <input type="submit" disabled={inputName === '' || inputPostText === ''}/>
            </div>
        </form>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addPost: post => dispatch({type: 'ADD_NEW_POST', post: post})
    }
}

export default connect(null, mapDispatchToProps)(NewPost)