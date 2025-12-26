import React, { useState, useEffect, useRef } from 'react'
import { Clock, Zap, Share2, Download, Palette, HelpCircle } from 'lucide-react'

const Header = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = useRef(null);

    // Cerrar al tocar fuera
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                setShowTooltip(false);
            }
        };

        if (showTooltip) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [showTooltip]);

    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto px-6 py-8 flex justify-between items-center">
                <h1 className="text-4xl font-bold text-white text-left">CodeSnap</h1>
                <div className="relative" ref={tooltipRef}>
                    {/* Desktop: hover | Mobile: click */}
                    <button
                        className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors select-none"
                        onClick={() => setShowTooltip(!showTooltip)}
                        onMouseEnter={() => window.innerWidth >= 768 && setShowTooltip(true)}
                        onMouseLeave={() => window.innerWidth >= 768 && setShowTooltip(false)}
                    >
                        <span className="hidden sm:inline">How it works?</span>
                        <HelpCircle className="w-5 h-5" />
                    </button>

                    {showTooltip && (
                        <div className="absolute top-full right-0 mt-2 w-80 p-5 bg-[#0d0d12] rounded-xl shadow-2xl border border-[#1a1a24] z-50">
                            {/* Arrow */}
                            <div className="absolute -top-2 right-4 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#1a1a24]"></div>

                            {/* Steps */}
                            <div className="space-y-3 mb-4">
                                <h3 className="text-sm font-semibold text-gray-100 mb-3">Quick Start</h3>
                                <ol className="text-sm text-gray-300 space-y-2">
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center mt-0.5">1</span>
                                        <span>Paste your code into the editor</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center mt-0.5">2</span>
                                        <span>Customize theme, font, colors & shadow</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center mt-0.5">3</span>
                                        <span>Click <strong className="text-blue-400">Generate</strong> to create your image</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 text-xs flex items-center justify-center mt-0.5">4</span>
                                        <span>Download PNG or share the link</span>
                                    </li>
                                </ol>
                            </div>

                            {/* Divider */}
                            <div className="border-t border-[#1a1a24] my-4"></div>

                            {/* Features */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-semibold text-gray-100 mb-3">Good to know</h3>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                                    <span>Shared links expire after <strong className="text-amber-400">1 hour</strong></span>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Zap className="w-3.5 h-3.5 text-green-400" />
                                    <span>Rate limit: 20 generations / 15 min</span>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Palette className="w-3.5 h-3.5 text-purple-400" />
                                    <span>8 themes • 10 languages • 3 fonts</span>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Download className="w-3.5 h-3.5 text-blue-400" />
                                    <span>PNG downloads are permanent</span>
                                </div>

                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                                    <span>Last 5 snippets saved locally</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Header