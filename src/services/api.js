import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export async function fetchGetSnippetsById(pIntSnippetId) {
    try {
        const response = await api.get(`/snippets/${pIntSnippetId}`);
        return response.data;
    } catch (err) {
        if (err.response?.status === 404) {
            throw new Error("Snippet not found");
        }
        throw new Error(err.response?.data?.message || "Failed to fetch snippet");
    }
}

export async function fetchGetSnippetImageById(pIntSnippetId) {
    try {
        const response = await api.get(`/snippets/${pIntSnippetId}/image`, {
            responseType: 'blob'
        });
        return response.data;
    } catch (err) {
        console.log(err)
        throw new Error("Failed to download image");
    }
}

export async function fetchPostSnippets(pObjSnippet) {
    try {
        const response = await api.post("/snippets/generate", pObjSnippet);
        return response;
    } catch (err) {
        if (err.response?.status === 429) {
            throw new Error("Too many requests. Try again in 15 minutes.");
        }
        throw new Error(err.response?.data?.message || "Failed to create snippet");
    }
}