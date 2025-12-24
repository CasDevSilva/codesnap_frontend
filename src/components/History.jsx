const History = ({ snippets, onClear }) => {
    if (!snippets.length) {
        return (
            <div className="bg-[#0d0d12] rounded-2xl p-6 border border-[#1a1a24]">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">History</h2>
                <p className="text-gray-500">No snippets yet</p>
            </div>
        );
    }

    return (
        <div className="bg-[#0d0d12] rounded-2xl p-6 border border-[#1a1a24]">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-100">History</h2>
                <button onClick={onClear} className="text-sm text-gray-500 hover:text-gray-200 transition-colors">Clear history</button>
            </div>
            <div className="space-y-3">
                {snippets.map((snippet, index) => (
                    <div key={snippet.id ?? index} className="bg-[#14141a] hover:bg-[#1a1a24] transition-colors rounded-lg p-4 cursor-pointer border border-[#1a1a24]">
                        <p className="text-sm text-gray-300 mb-2">Language: {snippet.language}</p>
                        <pre className="text-xs text-gray-500 overflow-hidden text-ellipsis">{snippet.code}</pre>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default History