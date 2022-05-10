import Client from './api'

export const GetAllGroups = async () => {
    try {
        const res = await Client.get('/groups/')
        return res.data
    } catch (error) {
        throw error
    }
}