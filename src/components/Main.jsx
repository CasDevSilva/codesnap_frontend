import Editor from './editor/Editor'
import History from './History'

const Main = ({
    addSnippet,
    snippets, onClear,
    setShowSnippet,
    setCurrentSnippet,
    code, setCode,
    language, setLanguage,
    font, setFont,
    theme, setTheme,
    background, setBackground,
    shadow, setShadow,
    padding, setPadding

}) => {
    return (
        <div className="w-full max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
                <Editor
                    addSnippet = { addSnippet }

                    code       = {code}         setCode = {setCode}
                    language   = {language}     setLanguage = {setLanguage}
                    font       = {font}         setFont = {setFont}
                    theme      = {theme}        setTheme = {setTheme}
                    background = {background}   setBackground = {setBackground}
                    shadow     = {shadow}       setShadow = {setShadow}
                    padding    = {padding}      setPadding = {setPadding}
                />
                <History
                    snippets          = {snippets}
                    onClear           = {onClear}
                    setShowSnippet    = {setShowSnippet}
                    setCurrentSnippet = {setCurrentSnippet}
                />
            </div>
        </div>
    )
}

export default Main