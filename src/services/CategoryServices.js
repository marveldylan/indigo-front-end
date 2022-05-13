import Client from './api'

export const GetAllCategories = async () => {
    try {
        const res = await Client.get('/categories/')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetCategoryById = async (id) => {
    try {
        const res = await Client.get(`/categories/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const FollowUnfollowCategory = async (id, followCount) => {
    try {
            const res = await Client.put(`/categories/${id}`,{ follower_counter: followCount})
            return res.data

    } catch (error) {
        throw error
    }
}