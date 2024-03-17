import {Dispatch} from "redux";
import {
    setUserFriendsCount, setUserNickname,
    setUsers,
    setUserSubscribersCount,
    setUserSubscriptionsCount
} from "@/redux/reducers/usersReducer";
import {UsersAPI} from "@/api/users/usersAPI";
import {AuthAPI} from "@/api/auth/authAPI";

export const usersThunk = {

    GetRandomFriends() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetRandomFriendsAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUsers(response[1]))
                            break
                        }
                        case 400 : {
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetFriendsCount() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetCountFriendsAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUserFriendsCount(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetSubscriptionsCount() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetCountSubscriptionsAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUserSubscriptionsCount(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetSubscribersCount() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetCountSubscribersAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUserSubscribersCount(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    ActionUser(id: string, action: string) {
        return (dispatch: Dispatch) => {
            UsersAPI.ActionUsersAPI({
                idOtherUser: id,
                action: action,
            }).then(response => {
                debugger
                switch (response[0]) {
                    case 200 : {

                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 404 : {
                        break
                    }
                    case 400 : {
                        // relation has already exist
                        break
                    }
                }

            })
        }
    },

    GetUserFromListAuthData(id: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.AuthDataAPI({
                id: id
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setUserNickname(id, response[1].nickname))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    GetFriends() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetFriendsAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUsers(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetSubscriptions() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetSubscriptionsAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUsers(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetSubscribers() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetSubscribersAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUsers(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    },

    GetSearch() {
        return (dispatch: Dispatch) => {
            UsersAPI.GetSearchAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setUsers(response[1]))
                            break
                        }
                        case 401 : {
                            localStorage.setItem('token', '')
                            break
                        }
                    }
                })
        }
    }
}