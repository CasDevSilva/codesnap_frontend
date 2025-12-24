import React, { useState } from 'react'
import CodeEditor from './CodeEditor'
import StyleCustomizer from './StyleCustomizer'
import ActionsEditor from './ActionsEditor'

const Editor = ({ addSnippet }) => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState("javascript");
    const [font, setFont] = useState('opt-1');
    const [theme, setTheme] = useState('opt-1');
    const [background, setBackground] = useState('#ffffff');
    const [shadow, setShadow] = useState(false);
    const [padding, setPadding] = useState(16);

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
                code    = {code}
                setCode = {setCode}
            />
            <ActionsEditor
                code          = {code}  setCode       = {setCode}
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