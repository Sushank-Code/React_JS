import axios from "axios";

const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`
})

export const getApiData = () => {
    return api.get(`/posts`)
}

export const deleteApiData = (id) => {
    return api.delete(`/posts/${id}`)
}

export const postApiData = (post) => {
    return api.post(`/posts`, post)
}
export const updateApiData = (id, post) => {
    return api.put(`/posts/${id}`, post)
}