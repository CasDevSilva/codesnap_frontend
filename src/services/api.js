import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json"
    }
});

export async function fetchGetSnippetsById() {
}

export async function fetchGetSnippetImageById() {
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