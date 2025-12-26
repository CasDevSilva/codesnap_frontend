import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { loadSnippetsFromStorage, saveSnippetsToStorage } from './utils/constants'
import { Clipboard, Code, X, Check, Download, Maximize2, Minimize2 } from 'lucide-react'
import clipboardCopy from 'clipboard-copy'

const MAX_HISTORY = 5;

function App() {
    const [snippets, setSnippets] = useState(() => loadSnippetsFromStorage());

    const [showSnippet, setShowSnippet] = useState(false);
    const [currentSnippet, setCurrentSnippet] = useState({});
    const [copied, setCopied] = useState(false);
    const [expanded, setExpanded] = useState(false);

    const [code, setCode] = useState('');
    const [language, setLanguage] = useState("javascript");
    const [font, setFont] = useState('"Open Sans", sans-serif');
    const [theme, setTheme] = useState('default');
    const [background, setBackground] = useState('#525252');
    const [shadow, setShadow] = useState(false);
    const [padding, setPadding] = useState(16);

    useEffect(() => {
        saveSnippetsToStorage(snippets);
    }, [snippets]);

    function addSnippet(snippet) {
        setSnippets(prev => {
            const updated = [...prev, snippet];
            return updated.slice(-MAX_HISTORY);
        });
    }

    function clearHistory() {
        setSnippets([]);
    }

    function handleCopy() {
        clipboardCopy(currentSnippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    function handleCloseModal() {
        setCurrentSnippet({});
        setShowSnippet(false);
        setCopied(false);
        setExpanded(false);
    }

    function handleSetToEditor() {
        setCode(currentSnippet.code);
        setLanguage(currentSnippet.language);
        setFont(currentSnippet.font);
        setTheme(currentSnippet.theme);
        setBackground(currentSnippet.background);
        setShadow(currentSnippet.shadow);
        setPadding(currentSnippet.padding);
        handleCloseModal();
    }

    function handleDownload() {
        const link = document.createElement('a');
        link.download = `codesnap-${Date.now()}.png`;
        link.href = currentSnippet.imageBase64;
        link.click();
    }

    return (
        <div className="min-h-screen bg-[#06060a] flex flex-col relative">
            <Header />
            <div className="flex-1 flex items-center">
                <Main
                    addSnippet        = { addSnippet }
                    snippets          = { snippets }
                    onClear           = { clearHistory }
                    setShowSnippet    = { setShowSnippet }
                    setCurrentSnippet = { setCurrentSnippet }
                    code              = {code}             setCode           = {setCode}
                    language          = {language}         setLanguage       = {setLanguage}
                    font              = {font}             setFont           = {setFont}
                    theme             = {theme}            setTheme          = {setTheme}
                    background        = {background}       setBackground     = {setBackground}
                    shadow            = {shadow}           setShadow         = {setShadow}
                    padding           = {padding}          setPadding        = {setPadding}
                />
            </div>
            <Footer />

            {/* Modal Overlay */}
            {showSnippet && (
                <div
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4"
                    onClick={handleCloseModal}
                >
                    {/* Modal Content */}
                    <div
                        className={`bg-[#0d0d12] rounded-2xl border border-[#1a1a24] shadow-2xl overflow-hidden transition-all duration-300 ${
                            expanded
                                ? 'w-full h-full max-w-[95vw] max-h-[95vh]'
                                : 'w-full max-w-2xl max-h-[90vh]'
                        }`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a24] bg-[#0d0d12] sticky top-0 z-10">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <h3 className="text-lg font-semibold text-gray-100">Snippet Preview</h3>
                                <span className="px-2 py-0.5 rounded text-xs font-medium bg-blue-500/20 text-blue-400">
                                    {currentSnippet.language}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() => setExpanded(!expanded)}
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors"
                                    title={expanded ? "Minimize" : "Expand"}
                                >
                                    {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                                </button>
                                <button
                                    onClick={handleCloseModal}
                                    className="p-2 rounded-lg text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        </div>

                        {/* Modal Body - Scrollable */}
                        <div className={`overflow-y-auto custom-scrollbar ${expanded ? 'h-[calc(100%-130px)]' : 'max-h-[60vh]'}`}>
                            <div className="p-6">
                                {/* Image Preview with scroll */}
                                <div className="rounded-xl overflow-hidden border border-[#1a1a24] bg-[#0a0a0e]">
                                    <div className={`overflow-auto custom-scrollbar ${expanded ? 'max-h-none' : 'max-h-[400px]'}`}>
                                        <img
                                            src={currentSnippet.imageBase64}
                                            alt="Code snippet"
                                            className="w-full h-auto"
                                        />
                                    </div>
                                </div>

                                {/* Info Bar */}
                                <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
                                    <span>{currentSnippet.code?.length || 0} characters</span>
                                    <span>Theme: {currentSnippet.theme} • Font: {currentSnippet.font?.split(',')[0]?.replace(/"/g, '')}</span>
                                </div>
                            </div>
                        </div>

                        {/* Modal Footer - Sticky */}
                        <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-[#1a1a24] bg-[#0a0a0e] sticky bottom-0">
                            <button
                                onClick={handleDownload}
                                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-gray-100 hover:bg-[#1a1a24] transition-colors"
                            >
                                <Download className="w-4 h-4" />
                                Download
                            </button>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleCopy}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-[#14141a] text-gray-100 border border-[#1a1a24] hover:bg-[#1a1a24] transition-colors"
                                >
                                    {copied ? <Check className="w-4 h-4 text-green-400" /> : <Clipboard className="w-4 h-4" />}
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                                <button
                                    onClick={handleSetToEditor}
                                    className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                                >
                                    <Code className="w-4 h-4" />
                                    Set to Editor
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default App