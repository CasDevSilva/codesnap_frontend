import React, { useState } from 'react'

const Header = () => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
                <h1 className="text-4xl font-bold text-white text-left">CodeSnap</h1>
                <div className="relative">
                    <h2
                        className="text-gray-500 text-right cursor-pointer hover:text-gray-300 transition-colors"
                        onMouseEnter={() => setShowTooltip(true)}
                        onMouseLeave={() => setShowTooltip(false)}
                    >
                        How it works?
                    </h2>
                    {showTooltip && (
                        <div className="absolute top-full right-0 mt-2 w-72 p-4 bg-[#0d0d12] rounded-lg shadow-lg border border-[#1a1a24] z-10">
                            <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#1a1a24]"></div>
                            <ol className="text-sm text-gray-300 space-y-2 list-decimal list-inside">
                                <li>Paste your code into the editor.</li>
                                <li>Customize the style (theme, font, colors).</li>
                                <li>Click Generate to create the image.</li>
                                <li>Download or share your snippet.</li>
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header