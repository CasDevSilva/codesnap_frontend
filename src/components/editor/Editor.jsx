import CodeEditor from './CodeEditor'
import StyleCustomizer from './StyleCustomizer'
import ActionsEditor from './ActionsEditor'

const Editor = ({
    addSnippet,
    code, setCode,
    language, setLanguage,
    font, setFont,
    theme, setTheme,
    background, setBackground,
    shadow, setShadow,
    padding, setPadding
}) => {
    return (
        <div className="bg-[#0d0d12] rounded-2xl p-6 border border-[#1a1a24]">
            <StyleCustomizer
                language      = {language}      setLanguage   = {setLanguage}
                font          = {font}          setFont       = {setFont}
                theme         = {theme}         setTheme      = {setTheme}
                background    = {background}    setBackground = {setBackground}
                shadow        = {shadow}        setShadow     = {setShadow}
                padding       = {padding}       setPadding    = {setPadding}
            />
            <CodeEditor
                code       = {code}           setCode = {setCode}
                language   = {language}
                font       = {font}
                theme      = {theme}
                background = {background}
                shadow     = {shadow}
                padding    = {padding}
            />
            <ActionsEditor
                code          = {code}      setCode = {setCode}
                language      = {language}
                font          = {font}
                theme         = {theme}
                background    = {background}
                shadow        = {shadow}
                padding       = {padding}
                addSnippet    = {addSnippet}

            />
        </div>
    )
}

export default Editor