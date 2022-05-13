import Client from './api';

export const GetUserById = async (id) => {
    try {
        const res = await Client.get(`/users/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetAllCreators = async () => {
    try {
        const res = await Client.get('/users')
        return res.data
    } catch (error) {
        throw error
    }
}

export const FollowCategoryUser = async (userId, categoryId) => {
    try {
        const res = await Client.put(`/users/${userId}`, {subscribed_categories: categoryId})
        return res.data
    } catch (error) {
        throw error
    }
}


export const UnfollowCategoryUser = async (userId, categoryId) => {
    try {
        const res = await Client.put(`/users/${userId}/unfollow/category/${categoryId}`)
        return res.data
    } catch (error) {
        throw error
    }
}