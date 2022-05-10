import Client from './api';

export const GetAllChannels = async () => {
    try {
        const res = await Client.get('/channels/')
        return res.data
    } catch (error) {
        throw error
    }
}