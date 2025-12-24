const History = ({ snippets, onClear }) => {
    if (!snippets.length) {
        return (
            <div>
                <h2>History</h2>
                <p>No snippets yet</p>
            </div>
        );
    }

    return (
        <div>
            <h2>History</h2>
            <button onClick={onClear}>Clear history</button>
            <div>
                {snippets.map((snippet, index) => (
                    <div key={snippet.id ?? index}>
                        <p>Language: {snippet.language}</p>
                        <pre>{snippet.code}</pre>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History