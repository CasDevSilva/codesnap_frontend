export const languages = [
    "javascript",
    "java"
];

export const fonts = [
    "Times New Roman",
    "Fira Code"
];

export const themes = [
    "Monokai",
    "Dark Blue"
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