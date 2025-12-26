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
        <div className="space-y-4">
            {/* Fila 1: Language, Font, Theme */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="languagecode" className="text-sm text-gray-500">Language</label>
                    <select name="languagecode" id="languagecode" value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-[#14141a] text-gray-100 rounded-lg px-4 py-2.5 border border-[#1a1a24] focus:outline-none focus:ring-0 focus:border-gray-500">
                        {
                            languages.map((lang)=>(
                                <option key={ lang } value={ lang }>{ lang }</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="fontcode" className="text-sm text-gray-500">Font</label>
                    <select name="fontcode" id="fontcode" value={font} onChange={(e) => setFont(e.target.value)} className="bg-[#14141a] text-gray-100 rounded-lg px-4 py-2.5 border border-[#1a1a24] focus:outline-none focus:ring-0 focus:border-gray-500">
                        {
                            fonts.map((font) => (
                                <option key={ font.value } value={ font.value }>{ font.label }</option>
                            ))
                        }
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="themecode" className="text-sm text-gray-500">Theme</label>
                    <select name="themecode" id="themecode" value={theme} onChange={(e) => setTheme(e.target.value)} className="bg-[#14141a] text-gray-100 rounded-lg px-4 py-2.5 border border-[#1a1a24] focus:outline-none focus:ring-0 focus:border-gray-500">
                        {
                            themes.map((theme) => (
                                <option key={ theme.value } value={ theme.value }>{ theme.label }</option>
                            ))
                        }
                    </select>
                </div>
            </div>

            {/* Fila 2: Background, Shadow, Padding */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-end">
                <div className="flex flex-col gap-2">
                    <label htmlFor="paddingcode" className="text-sm text-gray-500">Padding</label>
                    <input type="number" id="paddingcode" value={padding} onChange={(e) => setPadding(Number.parseInt(e.target.value))} className="bg-[#14141a] text-gray-100 rounded-lg px-4 py-2.5 border border-[#1a1a24] focus:outline-none focus:ring-0 focus:border-gray-500"/>
                </div>
                <div className="flex flex-col gap-2 w-full max-w-[200px]">
                    <label htmlFor="backgroundcode" className="text-sm text-gray-500">Background</label>
                    <div className="flex gap-3 items-center">
                        <input
                            type="color"
                            id="backgroundcode"
                            value={background}
                            onChange={(e) => setBackground(e.target.value)}
                            className="w-10 h-10 min-w-[40px] min-h-[40px] rounded cursor-pointer border-0 appearance-none focus:outline-none focus:ring-0 [&::-webkit-color-swatch-wrapper]:p-0 [&::-webkit-color-swatch]:rounded"
                        />
                        <input
                            type="text"
                            value={background}
                            readOnly
                            className="bg-[#14141a] text-gray-100 rounded-lg px-4 py-2.5 border border-[#1a1a24] focus:outline-none focus:ring-0 text-sm w-40 cursor-default"
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="shadowcode" className="text-sm text-gray-500">Shadow</label>
                    <div className="flex items-center gap-3 h-10">
                        <div
                            onClick={() => setShadow(!shadow)}
                            className={`relative w-11 h-6 rounded-full cursor-pointer transition-all duration-200 ${shadow ? 'bg-blue-600' : 'bg-gray-700'}`}
                        >
                            <div className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white transition-all duration-200 ${shadow ? 'translate-x-5' : 'translate-x-0'}`}></div>
                        </div>
                        <input type="checkbox" id="shadowcode" checked={shadow} onChange={(e) => setShadow(e.target.checked)} className="hidden"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleCustomizer