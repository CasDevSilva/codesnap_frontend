import React from 'react'
import { fonts, languages, themes } from '../../utils/constants'

const StyleCustomizer = ({
    language,   setLanguage,
    font,       setFont,
    theme,      setTheme,
    background, setBackground,
    shadow,     setShadow,
    padding,    setPadding
}) => {
    return (
        <div>
            <div>
                <label htmlFor="languagecode">Language: </label>
                <select name="languagecode" id="languagecode" value={language} onChange={(e) => setLanguage(e.target.value)}>
                    {
                        languages.map((lang)=>(
                            <option key={ lang } value={ lang }>{ lang }</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="fontcode">Font: </label>
                <select name="fontcode" id="fontcode" value={font} onChange={(e) => setFont(e.target.value)}>
                    {
                        fonts.map((font) => (
                            <option key={ font } value={ font }>{ font }</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="themecode">Theme: </label>
                <select name="themecode" id="themecode" value={theme} onChange={(e) => setTheme(e.target.value)}>
                    {
                        themes.map((theme) => (
                            <option key={ theme } value={ theme }>{ theme }</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="backgroundcode">Background: </label>
                <input type="color" id="backgroundcode" value={background} onChange={(e) => setBackground(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="shadowcode">Shadow: </label>
                <input type="checkbox" id="shadowcode" checked={shadow} onChange={(e) => setShadow(e.target.checked)}/>
            </div>
            <div>
                <label htmlFor="paddingcode">Padding: </label>
                <input type="number" id="paddingcode" value={padding} onChange={(e) => setPadding(Number.parseInt(e.target.value))}/>
            </div>
        </div>
    )
}

export default StyleCustomizer