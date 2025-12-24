const CodeEditor = ({ code, setCode }) => {
    return (
        <div className="my-6">
            <textarea
                className="w-full h-80 bg-[#14141a] text-gray-100 rounded-xl p-4 font-mono border border-[#1a1a24] focus:outline-none focus:ring-0 focus:border-gray-500 resize-none placeholder:text-gray-600"
                name = "code-editor"
                placeholder = "Paste your code here..."
                spellCheck  = {false}

                maxLength = {5000}

                value = {code}
                onChange = {(e) => setCode(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2 text-right">{code.length}/5000</p>
        </div>
    )
}

export default CodeEditor