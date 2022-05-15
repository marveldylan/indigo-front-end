import Client from './api';

export const CreateNewPost = async (channelId, userId, title, content, image, video, background) => {
    try {
        const res = await Client.post(`/posts/${channelId}/${userId}`, {
            title: title,
            content: content,
            image: image,
            video: video,
            background: background

        })
        return res.data
    } catch (error) {
        throw error
    }
}


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

export const UpdatePost = async (id, postTitle, postContent, postImage, postVideo) => {
    try {
        const res = await Client.put(`/posts/${id}`, {
            title: postTitle,
            content: postContent,
            image: postImage,
            video: postVideo
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