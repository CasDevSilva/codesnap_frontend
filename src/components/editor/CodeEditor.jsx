const CodeEditor = ({ code, setCode }) => {
    return (
        <>
            <textarea
                style={{
                    resize: "none"
                }}
                name = "code-editor"
                placeholder = "Paste your code here..."
                spellCheck  = {false}

                rows = {15}
                cols = {80}
                maxLength = {5000}

                value = {code}
                onChange = {(e) => setCode(e.target.value)}
            />
            <p>{code.length}/5000</p>
        </>
    )
}

export default CodeEditor