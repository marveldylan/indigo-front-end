import Client from './api'

export const GetCommentById = async (id) => {
    try {
        const res = await Client.get(`/comments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetCommentByUser = async (id) => {
    try {
        const res = await Client.get(`/comments/user/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}
export const GetCommentByPost = async (id) => {
    try {
        const res = await Client.get(`/comments/post/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateIndigoComment= async (id, redScore, blueScore, indigoScore) => {
    try {
        const res = await Client.put(`/comments/${id}`, {
            red_score: redScore,
            blue_score: blueScore,
            indigo: indigoScore
        })
        return res.data
    } catch (error) {
        throw error
    }
}


export const CreateComment = async (userId, postId, commentContent, commentBackground) => {
    try {
        const res = await Client.post(`/comments/${postId}/${userId}`,
        {
            content: commentContent,
            background: commentBackground
        })
        return res.data
    } catch (error) {
        throw error
    }
}

export const DeleteComment = async (id) => {
    try {
        const res = await Client.delete(`/comments/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}