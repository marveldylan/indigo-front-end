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
        const res = await Client.put(`/users/${userId}/follow/category/${categoryId}`)
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

export const DisbandGroupUser = async (userId, groupId) => {
    try {
        const res = await Client.put(`/users/${userId}/disband/group/${groupId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const FollowGroupUser = async (userId, groupId) => {
    try {
        const res = await Client.put(`/users/${userId}/follow/group/${groupId}`)
        return res.data
    } catch (error) {
        throw error
    }
}


export const UnfollowGroupUser = async (userId, groupId) => {
    try {
        const res = await Client.put(`/users/${userId}/unfollow/group/${groupId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const DisbandChannelUser = async (userId, channelId) => {
    try {
        const res = await Client.put(`/users/${userId}/disband/channel/${channelId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const FollowChannelUser = async (userId, channelId) => {
    try {
        const res = await Client.put(`/users/${userId}/follow/channel/${channelId}`)
        return res.data
    } catch (error) {
        throw error
    }
}


export const UnfollowChannelUser = async (userId, channelId) => {
    try {
        const res = await Client.put(`/users/${userId}/unfollow/channel/${channelId}`)
        return res.data
    } catch (error) {
        throw error
    }
}