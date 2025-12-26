import Editor from "react-simple-code-editor"
import { useEffect } from "react";
import Prism from "prismjs";

import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-rust';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';

const CodeEditor = ({
    code, setCode,
    language,
    font,
    theme,
    background,
    shadow,
    padding
}) => {

    const MAX_CHARS = 7500;

    useEffect(() => {
        const link = document.getElementById('prism-theme');
        if (link) {
            const cssFile = theme === 'default'
                ? 'prism.min.css'
                : `prism-${theme}.min.css`;
            link.href = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/${cssFile}`;
        }
    }, [theme]);

    const handleValueChange = (newCode) => {
        if (newCode.length <= MAX_CHARS) {
            setCode(newCode);
        } else {
            setCode(newCode.slice(0, MAX_CHARS));
        }
    };

    // Preview wrapper - simula cómo se verá la imagen final
    const previewWrapperStyles = {
        background: background,
        padding: `${padding}px`,
        borderRadius: '12px',
        boxShadow: shadow
            ? '0 0 0 1px rgba(37, 99, 234, 0.5), 0 8px 32px rgba(37, 99, 234, 0.3), 0 16px 48px rgba(0, 0, 0, 0.4)'
            : 'none',
    };

    // Contenedor con scroll
    const scrollContainerStyles = {
        maxHeight: '250px',
        overflowY: 'auto',
        borderRadius: '8px',
        background: 'rgba(0, 0, 0, 0.4)',
    };

    // Editor interno
    const editorStyles = {
        fontFamily: font,
        fontSize: 14,
        lineHeight: 1.6,
        minHeight: '200px',
        background: 'transparent',
        caretColor: '#fff',
    };

    return (
        <div className="my-6">
            <div style={previewWrapperStyles}
                id="code-editor-wrapper"
            >
                {/* Contenedor con scroll */}
                <div style={scrollContainerStyles}
                    className="custom-scrollbar"
                >
                    <Editor
                        value={code}
                        onValueChange={handleValueChange}
                        padding={16}
                        highlight={code => Prism.highlight(code, Prism.languages[language], language)}
                        style={editorStyles}
                        textareaClassName="editor-textarea"
                        preClassName="editor-pre"
                        placeholder="// Paste your code here..."
                    />
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-4 text-right">{code.length}/{MAX_CHARS}</p>
        </div>
    )
}

export default CodeEditor