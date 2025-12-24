import React from 'react'
import Editor from './editor/Editor'
import History from './History'

const Main = ({ addSnippet, snippets, onClear }) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
                <Editor
                    addSnippet = { addSnippet }
                />
                <History
                    snippets = {snippets}
                    onClear  = {onClear}
                />
            </div>
        </div>
    )
}

export default Main