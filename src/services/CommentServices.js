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