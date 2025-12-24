import { useState } from 'react'
import { fetchPostSnippets } from '../../services/api'

const ActionsEditor = ({
    code, setCode,
    language, font, theme, background, shadow, padding,
    addSnippet
}) => {
    const [loading, setLoading] = useState(false);

    async function handleGenerate() {
        if (!code.trim()) return;

        setLoading(true);

        try {
            const response = await fetchPostSnippets({
                code,
                language,
                theme,
                font,
                padding,
                background,
                shadow
            });

            addSnippet(response.data);
        } catch (err) {
            console.error("Error generating snippet:", err);
        } finally {
            setLoading(false);
        }
    }

    function handleClear() {
        setCode('');
    }

    return (
        <div className="flex gap-4 justify-end">
            <button
                onClick={handleClear}
                disabled={loading || !code.trim()}
                className="bg-[#14141a] hover:bg-[#1a1a24] text-gray-100 rounded-lg px-6 py-2.5 border border-[#1a1a24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Clear all
            </button>
            <button
                onClick={handleGenerate}
                disabled={loading || !code.trim()}
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2.5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {loading ? "Generating..." : "Generate"}
            </button>
        </div>
    )
}

export default ActionsEditor