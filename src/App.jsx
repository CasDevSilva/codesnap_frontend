import { useState, useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import History from './components/History'
import Footer from './components/Footer'
import { loadSnippetsFromStorage, saveSnippetsToStorage } from './utils/constants'

const MAX_HISTORY = 5;

function App() {
    const [snippets, setSnippets] = useState(() => loadSnippetsFromStorage());

    // Persistir cuando snippets cambie
    useEffect(() => {
        saveSnippetsToStorage(snippets);
    }, [snippets]);

    function addSnippet(snippet) {
        setSnippets(prev => {
            const updated = [...prev, snippet];
            return updated.slice(-MAX_HISTORY);
        });
    }

    function clearHistory() {
        setSnippets([]);
    }

    return (
        <div>
            <Header />
            <Main
              addSnippet={addSnippet}
              snippets={snippets}
              onClear={clearHistory}
            />
            <Footer />
        </div>
    )
}

export default App