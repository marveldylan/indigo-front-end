import Client from './api';


export const GetPostsByChannel = async (id) => {
    try {
        const res = await Client.get(`/posts/channel/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetPostById = async (id) => {
    try {
        const res = await Client.get(`/posts/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}