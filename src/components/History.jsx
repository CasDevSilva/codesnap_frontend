const History = ({ snippets, onClear, setShowSnippet, setCurrentSnippet }) => {
    if (!snippets.length) {
        return (
            <div className="bg-[#0d0d12] rounded-2xl p-6 border border-[#1a1a24]">
                <h2 className="text-xl font-semibold text-gray-100 mb-4">History</h2>
                <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="w-12 h-12 rounded-full bg-[#14141a] flex items-center justify-center mb-3">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <p className="text-gray-500 text-sm">No snippets yet</p>
                    <p className="text-gray-600 text-xs mt-1">Generated snippets will appear here</p>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#0d0d12] rounded-2xl p-6 border border-[#1a1a24]">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <h2 className="text-xl font-semibold text-gray-100">History</h2>
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-[#14141a] text-gray-400 border border-[#1a1a24]">
                        {snippets.length}
                    </span>
                </div>
                <button
                    onClick={onClear}
                    className="text-sm text-gray-500 hover:text-red-400 transition-colors"
                >
                    Clear all
                </button>
            </div>
            <div className="space-y-3 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
                {snippets.map((snippet, index) => (
                    <div
                        key={snippet.id ?? index}
                        className="group bg-[#14141a] hover:bg-[#1a1a24] transition-all duration-200 rounded-xl overflow-hidden cursor-pointer border border-[#1a1a24] hover:border-[#2a2a34]"
                        onClick={() => {
                            setShowSnippet(true);
                            setCurrentSnippet(snippet);
                        }}
                    >
                        {/* Image Thumbnail */}
                        <div className="relative overflow-hidden">
                            <img
                                src={snippet.imageBase64}
                                alt="Snippet preview"
                                className="w-full h-24 object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#14141a] to-transparent"></div>
                        </div>

                        {/* Card Content */}
                        <div className="p-3 -mt-4 relative">
                            <div className="flex items-center justify-between mb-2">
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                                    {snippet.language}
                                </span>
                                <span className="text-xs text-gray-600">
                                    {snippet.code?.length || 0} chars
                                </span>
                            </div>
                            <pre className="text-xs text-gray-500 truncate font-mono">
                                {snippet.code?.substring(0, 50)}{snippet.code?.length > 50 ? '...' : ''}
                            </pre>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default History