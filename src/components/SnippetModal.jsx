import { Clipboard, Code, X, Check, Download, Maximize2, Minimize2, Share } from 'lucide-react'

const SnippetModal = ({
    show,
    snippet,
    copied,
    expanded,
    onClose,
    onCopy,
    onDownload,
    onSetToEditor,
    onToggleExpand
}) => {
    if (!show) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-2 sm:p-4"
            onClick={onClose}
        >
            <div
                className={`bg-[#0d0d12] rounded-xl sm:rounded-2xl border border-[#1a1a24] shadow-2xl overflow-hidden transition-all duration-300 ${
                    expanded
                        ? 'w-full h-full max-w-[98vw] max-h-[98vh] sm:max-w-[95vw] sm:max-h-[95vh]'
                        : 'w-full max-w-[95vw] sm:max-w-2xl max-h-[95vh] sm:max-h-[90vh]'
                }`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-[#1a1a24] bg-[#0d0d12] sticky top-0 z-10">
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                        <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-100 truncate">Snippet Preview</h3>
                        <span className="hidden sm:inline px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                            {snippet.language}
                        </span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0">
                        <button
                            onClick={onToggleExpand}
                            className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors"
                            title={expanded ? "Minimize" : "Expand"}
                        >
                            {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                        </button>
                        <button
                            onClick={onClose}
                            className="p-1.5 sm:p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Body */}
                <div className={`overflow-y-auto custom-scrollbar ${expanded ? 'h-[calc(100%-120px)] sm:h-[calc(100%-130px)]' : 'max-h-[50vh] sm:max-h-[60vh]'}`}>
                    <div className="p-4 sm:p-6">
                        {/* Language badge - visible on mobile */}
                        <div className="sm:hidden mb-3">
                            <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                                {snippet.language}
                            </span>
                        </div>

                        <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#1a1a24] bg-[#0a0a0e]">
                            <div className={`overflow-auto custom-scrollbar ${expanded ? 'max-h-none' : 'max-h-[300px] sm:max-h-[400px]'}`}>
                                <img
                                    src={snippet.imageBase64}
                                    alt="Code snippet"
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-3 sm:mt-4 text-xs text-gray-500 gap-1 sm:gap-0">
                            <span>{snippet.code?.length || 0} characters</span>
                            <span className="truncate">Theme: {snippet.theme} • Font: {snippet.font?.split(',')[0]?.replace(/"/g, '')}</span>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 border-t border-[#1a1a24] bg-[#0a0a0e] sticky bottom-0">
                    {/* Download - Full width on mobile, left side on desktop */}
                    <button
                        onClick={onDownload}
                        className="flex items-center justify-center sm:justify-start gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors order-last sm:order-first"
                    >
                        <Download className="w-4 h-4" />
                        <span>Download</span>
                    </button>

                    {/* Action buttons - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                        <a
                            href={snippet.shareUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#14141a] text-gray-100 border border-[#1a1a24] hover:bg-[#1a1a24] hover:border-gray-700 transition-all"
                        >
                            <Share className="w-4 h-4 text-gray-400" />
                            <span>Share Link</span>
                        </a>
                        <button
                            onClick={onCopy}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#14141a] text-gray-100 border border-[#1a1a24] hover:bg-[#1a1a24] transition-colors"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Clipboard className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                        <button
                            onClick={onSetToEditor}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <Code className="w-4 h-4" />
                            <span className="sm:inline">Set to Editor</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SnippetModal