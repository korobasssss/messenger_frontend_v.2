import {Dispatch} from "redux";
import {
    setUserChangeStatus,
    setUserFriendsCount,
    setUsers,
    setUserSubscribersCount,
    setUserSubscriptionsCount
} from "@/redux/reducers/usersReducer";
import {UsersAPI} from "@/api/users/usersAPI";
import {CookieClear} from "@/redux/thunks/authThunk";
import Cookies from "js-cookie";
import {Actions, Status} from "@/app/interfaces/friends/friendsInterface";

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
                            CookieClear()
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
                            CookieClear()
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
                            CookieClear()
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
                            CookieClear()
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
                switch (response[0]) {
                    case 200 : {
                        switch (action) {
                            case Actions.CREATE: {
                                dispatch(setUserChangeStatus(id, Status.SEND_FIRST))
                                break
                            }
                            case Actions.DELETE_FRIEND: {
                                dispatch(setUserChangeStatus(id, Status.SEND_SECOND))
                                break
                            }
                            case Actions.ACCEPT: {
                                dispatch(setUserChangeStatus(id, Status.FRIENDS))
                                break
                            }
                            case Actions.REJECT: {
                                dispatch(setUserChangeStatus(id, Status.NULL))
                                break
                            }
                            case Actions.DELETE_REQUEST: {
                                dispatch(setUserChangeStatus(id, Status.NULL))
                                break
                            }
                        }
                        break
                    }
                    case 401 : {
                        Cookies.remove('token')
                        break
                    }
                    case 404 : {
                        break
                    }
                    case 400 : {
                        CookieClear()
                        break
                    }
                }

            })
        }
    },

    // GetUserFromListAuthData(id: string) {
    //     return (dispatch: Dispatch) => {
    //         AuthAPI.AuthDataAPI({
    //             id: id
    //         }).then(response => {
    //             switch (response[0]) {
    //                 case 200 : {
    //                     dispatch(setUserNickname(id, response[1].nickname))
    //                     break
    //                 }
    //                 case 401 : {
    //                     localStorage.setItem('token', '') // no
    //                     break
    //                 }
    //             }
    //         })
    //     }
    // },

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
                            CookieClear()
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
                            CookieClear()
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
                            CookieClear()
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
                            CookieClear()
                            break
                        }
                    }
                })
        }
    }


}