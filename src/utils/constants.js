export const languages = [
    "javascript",
    "python",
    "java",
    "go",
    "rust",
    "bash",
    "sql",
    "json",
    "css",
    "markup"
];

export const fonts = [
    { label: 'Open Sans', value: '"Open Sans", sans-serif' },
    { label: 'Ubuntu',    value: '"Ubuntu", sans-serif' },
    { label: 'Archivo',   value: '"Archivo", sans-serif' },
];

export const themes = [
    { label: 'Tomorrow',        value: 'tomorrow' },
    { label: 'Okaidia',         value: 'okaidia' },
    { label: 'Twilight',        value: 'twilight' },
    { label: 'Dark',            value: 'dark' },
    { label: 'Funky',           value: 'funky' },
    { label: 'Coy',             value: 'coy' },
    { label: 'Solarized Light', value: 'solarizedlight' },
    { label: 'Default',         value: 'default' }  // usa "prism.min.css" sin sufijo
];

// Solo funciones de persistencia, sin lógica de límites
const STORAGE_KEY = "snippets";

export function loadSnippetsFromStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveSnippetsToStorage(snippets) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(snippets));
}