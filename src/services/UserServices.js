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
        const res = await Client.get('users')
        return res.data
    } catch (error) {
        throw error
    }
}