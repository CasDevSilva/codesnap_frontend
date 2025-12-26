import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, Copy, Code, Check } from 'lucide-react';
import clipboardCopy from 'clipboard-copy';
import { fetchGetSnippetsById } from '../services/api';

const SnippetView = () => {
    const { id } = useParams();
    const [snippet, setSnippet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        async function fetchSnippet() {
            try {
                const data = await fetchGetSnippetsById(id);
                setSnippet(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchSnippet();
    }, [id]);

    function handleCopy() {
        clipboardCopy(snippet.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    function handleDownload() {
        const link = document.createElement('a');
        link.href = `${import.meta.env.VITE_API_URL}/snippets/${id}/image`;
        link.download = `codesnap-${id}.png`;
        link.click();
    }

    if (loading) {
        return (
            <div className="w-full flex items-center justify-center py-12 md:py-20">
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                    <p className="text-gray-400 text-sm md:text-base">Loading snippet...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full flex items-center justify-center py-12 md:py-20 px-4">
                <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                        <span className="text-xl md:text-2xl">😕</span>
                    </div>
                    <p className="text-red-400 mb-2 text-sm md:text-base">{error}</p>
                    <p className="text-gray-500 text-xs md:text-sm mb-6">The snippet may have expired or doesn't exist.</p>
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                    >
                        <Code className="w-4 h-4" />
                        Create Your Own
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            <div className="bg-[#0d0d12] rounded-xl sm:rounded-2xl border border-[#1a1a24] p-4 sm:p-6">
                {/* Image */}
                <div className="rounded-lg sm:rounded-xl overflow-hidden border border-[#1a1a24] bg-[#0a0a0e] mb-4 sm:mb-6">
                    <div className="overflow-auto max-h-[50vh] sm:max-h-[60vh] custom-scrollbar">
                        <img
                            src={snippet.imageBase64}
                            alt="Code snippet"
                            className="w-full h-auto"
                        />
                    </div>
                </div>

                {/* Metadata + Actions */}
                <div className="flex flex-col gap-4">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 flex-wrap">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            {snippet.language}
                        </span>
                        <span className="text-xs text-gray-500">
                            {snippet.code?.length || 0} characters
                        </span>
                    </div>

                    {/* Actions - Stack on mobile, row on larger screens */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
                        <button
                            onClick={handleCopy}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium bg-[#14141a] text-gray-100 border border-[#1a1a24] hover:bg-[#1a1a24] transition-colors"
                        >
                            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                            {copied ? 'Copied!' : 'Copy Code'}
                        </button>
                        <button
                            onClick={handleDownload}
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium bg-[#14141a] text-gray-100 border border-[#1a1a24] hover:bg-[#1a1a24] transition-colors"
                        >
                            <Download className="w-4 h-4" />
                            Download
                        </button>
                        <Link
                            to="/"
                            className="flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                        >
                            <Code className="w-4 h-4" />
                            Create Your Own
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SnippetView;