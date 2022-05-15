import Client from './api';

export const CreateNewChannel = async (userId, groupId, categoryId, channelName, channelImage) => {
    try {
        const res = await Client.post(`/channels/${groupId}/${userId}`, {
            category_id: categoryId,
            name: channelName,
            cover_image: channelImage
        })
    } catch (error) {
        throw error
    }
}

export const GetAllChannels = async () => {
    try {
        const res = await Client.get('/channels/')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetChannelsByCategory = async (id) => {
    try {
        const res = await Client.get(`/channels/category/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetChannelsByUser = async (id) => {
    try {
        const res = await Client.get(`/channels/user/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetChannelsByGroup = async (id) => {
    try {
        const res = await Client.get(`/channels/group/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetChannelById = async (id) => {
    try {
        const res = await Client.get(`/channels/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const FollowUnfollowChannel= async (id, followCount) => {
    try {
            const res = await Client.put(`/channels/${id}`,{ follower_counter: followCount})
            return res.data

    } catch (error) {
        throw error
    }
}

export const DeleteChannel = async (id) => {
    try {
        const res = await Client.delete(`/channels/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}