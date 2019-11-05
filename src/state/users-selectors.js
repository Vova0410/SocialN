/**
 * Created by Dell on 04.11.2019.
 */

export const getUsers = (state) => {
    return state.usersPage.users;
};

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
};

export const getisDisabling = (state) => {
    return state.usersPage.isDisabling;
};

