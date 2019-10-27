import React from 'react';
import * as axios from 'axios';

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "62ec85fc-1ca9-472a-8f86-fbb367779798"
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(respons => respons.data)
    },
    changeUser(pageNum, pageSize) {
        return instance.get(`users?page=${pageNum}&count=${pageSize}`).then(respons => respons.data)
    },
    deleteFollow(userId) {
        return instance.delete(`follow/${userId}`).then(respons => respons.data)
    },
    setFollow(userId) {
        return instance.post(`follow/${userId}`).then(respons => respons.data)

    },
    getUserProfile(userId) {
        console.warn('obsolete method. Please ProfileAPI object.');
        return profileAPI.getUserProfile(userId)
    }

};

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(`profile/${userId}`).then(respons => respons.data)
    },
    getStatus(userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    upDateStatus(status) {
        return instance.put(`/profile/status`, {status: status})
    }
}

export const authAPI = {
     me() {
        return instance.get(`auth/me`)
    }
};

