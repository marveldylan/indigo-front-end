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

// export const FollowCategoryUser = async (userId, categoryId) => {
//     try {
//         const res = await Client.put(`/users/${userId}/follow/category/${categoryId}`)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

// export const UnfollowCategoryUser = async (userId, categoryId) => {
//     try {
//         const res = await Client.put(`/users/${userId}/unfollow/category/${categoryId}`)
//         return res.data
//     } catch (error) {
//         throw error
//     }
// }

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

export const FollowUser = async (userId, followUserId) => {
    try {
        const res = await Client.put(`/users/${userId}/follow/user/${followUserId}`)
        return res.data
    } catch (error) {
        throw error
    }
}


export const UnfollowUser = async (userId, unfollowUserId) => {
    try {
        const res = await Client.put(`/users/${userId}/unfollow/user/${unfollowUserId}`)
        return res.data
    } catch (error) {
        throw error
    }
}

export const UpdateUser = async (
    id,
    firstName,
    lastName,
    username,
    email,
    about,
    profileImage,
    coverImage,
    postBackground,
    commentBackground
) => {
    try {
        const res = await Client.put(`/users/${id}`, {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            about: about,
            profile_image: profileImage,
            cover_image: coverImage,
            post_background: postBackground,
            comment_background: commentBackground
        })
        return res.data
    } catch (error) {
        throw error
    }
}
