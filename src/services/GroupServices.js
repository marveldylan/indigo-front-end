import Client from './api'

export const CreateNewGroup = async (userId, categoryId, groupName, groupImage) => {
    try {
        const res = await Client.post(`/groups/${userId}`, {
            category_id: categoryId,
            name: groupName,
            cover_image: groupImage
        })
    } catch (error) {
        throw error
    }
}

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

export const GetGroupsByUser = async (id) => {
    try {
        const res = await Client.get(`/groups/user/${id}`)
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

export const FollowUnfollowGroup = async (id, followCount) => {
    try {
            const res = await Client.put(`/groups/${id}`,{ follower_counter: followCount})
            return res.data

    } catch (error) {
        throw error
    }
}

export const DeleteGroup = async (id) => {
    try {
        const res = await Client.delete(`/groups/${id}`)
        return res.data
    } catch (error) {
        throw error
    }
}