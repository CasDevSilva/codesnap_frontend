import React from 'react'
import Editor from './editor/Editor'
import History from './History'

const Main = ({ addSnippet, snippets, onClear }) => {
    return (
        <div>
            <Editor
                addSnippet = { addSnippet }
            />
            <History
                snippets = {snippets}
                onClear  = {onClear}
            />
        </div>
    )
}

export default Main