import Client from './api'

export const GetAllGroups = async () => {
    try {
        const res = await Client.get('/groups/')
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetGroupsByCategory = async (id) => {
    try {
        const res = await Client.get(`/groups/category/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const GetGroupById = async (id) => {
    try {
        const res = await Client.get(`/groups/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}