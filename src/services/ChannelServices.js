import Client from './api';

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