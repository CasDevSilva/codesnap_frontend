import { useState, useEffect } from 'react'
import Main from '../components/Main'
import SnippetModal from '../components/SnippetModal'
import { loadSnippetsFromStorage, saveSnippetsToStorage } from '../utils/constants'
import clipboardCopy from 'clipboard-copy'

const MAX_HISTORY = 5;

function HomePage() {
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
        console.log('Setting to editor:', {
            code: currentSnippet.code,
            language: currentSnippet.language,
            font: currentSnippet.font,
            theme: currentSnippet.theme,
            background: currentSnippet.background,
            shadow: currentSnippet.shadow,
            shadowType: typeof currentSnippet.shadow,
            padding: currentSnippet.padding,
            paddingType: typeof currentSnippet.padding
        });

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
        <>
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

            <SnippetModal
                show={showSnippet}
                snippet={currentSnippet}
                copied={copied}
                expanded={expanded}
                onClose={handleCloseModal}
                onCopy={handleCopy}
                onDownload={handleDownload}
                onSetToEditor={handleSetToEditor}
                onToggleExpand={() => setExpanded(!expanded)}
            />
        </>
    )
}

export default HomePage