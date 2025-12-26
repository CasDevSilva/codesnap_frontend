import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export async function fetchGetSnippetsById(pIntSnippetId) {
    try {
        const response = await api.get(`/snippets/${pIntSnippetId}`)
        const snippetGetted = await response.data;

        return snippetGetted;
    } catch(err) {
        if (axios.isCancel(err)) {
            console.log("Request cancelled")
        }

        throw err
    }
}

export async function fetchGetSnippetImageById(pIntSnippetId) {
    try {
        const response = await api.get(`/snippets/${pIntSnippetId}/image`, {
            responseType: 'blob'  // Importante: indica que esperas binario
        });

        return response.data;  // Retorna el Blob directamente
    } catch(err) {
        if (axios.isCancel(err)) {
            console.log("Request cancelled")
        }

        throw err
    }
}

export async function fetchPostSnippets(pObjSnippet) {
    try {
        const snippetCreate = await api.post("/snippets/generate", pObjSnippet);

        return snippetCreate;
    } catch(err) {
        if (axios.isCancel(err)) {
            console.log("Request cancelled")
        }

        throw err
    }
}