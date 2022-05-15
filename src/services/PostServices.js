import Client from './api';

export const CreateNewPost = async (channelId, userId, title, contentType, content, image, video, background) => {
    try {
        console.log(background, 'background')
        const res = await Client.post(`/posts/${channelId}/${userId}`, {
            title: title,
            content_type: contentType,
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

export const UpdatePost = async (id, postTitle, postContentType, postContent, postImage, postVideo) => {
    try {
        const res = await Client.put(`/posts/${id}`, {
            title: postTitle,
            content_type: postContentType,
            content: postContent,
            image: postImage,
            video: postVideo
        })
        return res.data
    } catch (error) {
        throw error
    }
}
export const UpdateIndigoPost = async (id, redScore, blueScore, indigoScore) => {
    try {
        const res = await Client.put(`/posts/${id}`, {
            red_score: redScore,
            blue_score: blueScore,
            indigo: indigoScore
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