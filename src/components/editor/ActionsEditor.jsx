import { useState } from 'react'
import { fetchPostSnippets } from '../../services/api'
import html2canvas from 'html2canvas';

const ActionsEditor = ({
    code, setCode,
    language, font, theme, background, shadow, padding,
    addSnippet
}) => {
    const [loading, setLoading] = useState(false);

    async function handleGenerate() {
        if (!code.trim()) return;

        setLoading(true);

        const elementCode = document.querySelector("#code-editor-wrapper");
        const scrollContainer = elementCode?.querySelector(".custom-scrollbar");
        const textarea = elementCode?.querySelector("textarea");

        // Guardar estilos originales
        const originalMaxHeight = scrollContainer?.style.maxHeight;
        const originalOverflow = scrollContainer?.style.overflowY;

        try {
            // Ocultar textarea
            if (textarea) textarea.style.display = "none";

            // Expandir contenedor para captura completa
            if (scrollContainer) {
                scrollContainer.style.maxHeight = "none";
                scrollContainer.style.overflowY = "visible";
            }

            // Detectar móvil y ajustar escala
            const isMobile = window.innerWidth < 768;

            const canvas = await html2canvas(elementCode, {
                backgroundColor: null,
                scale: isMobile ? 1 : 2,
                useCORS: true,
                logging: false,
            });

            // Restaurar estilos
            if (textarea) textarea.style.display = "";
            if (scrollContainer) {
                scrollContainer.style.maxHeight = originalMaxHeight;
                scrollContainer.style.overflowY = originalOverflow;
            }

            const imageBase64 = canvas.toDataURL('image/png');

            const response = await fetchPostSnippets({
                code,
                imageBase64,
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
            alert("Error generating image: " + err.message);

            // Restaurar en caso de error
            if (textarea) textarea.style.display = "";
            if (scrollContainer) {
                scrollContainer.style.maxHeight = originalMaxHeight;
                scrollContainer.style.overflowY = originalOverflow;
            }
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