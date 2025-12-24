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
        <div>
            <button
                onClick={handleGenerate}
                disabled={loading || !code.trim()}
            >
                {loading ? "Generating..." : "Generate"}
            </button>
            <button
                onClick={handleClear}
                disabled={loading || !code.trim()}
            >
                Clear all
            </button>
        </div>
    )
}

export default ActionsEditor