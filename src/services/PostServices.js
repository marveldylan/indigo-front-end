import Client from './api';


export const GetPostsByChannel = async (id) => {
    try {
        const res = await Client.get(`/posts/channel/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetPostsByUser = async (id) => {
    try {
        const res = await Client.get(`/posts/user/${id}`)
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

export const UpdatePost = async (id, postTitle, postContent, postAttachment) => {
    try {
        const res = await Client.put(`/posts/${id}`, {
            title: postTitle,
            content: postContent,
            attachment: postAttachment
        })
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeletePost = async (id) => {
    try {
        const res = await Client.delete(`/posts/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}