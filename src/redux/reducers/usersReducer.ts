import {userShortInfo} from "@/app/interfaces/friends/friendsInterface";

const SET_USERS = 'SET_USERS'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'

const SET_CHANGE_USER_STATUS = 'SET_CHANGE_USER_STATUS'

const CLEAR_USERS = 'CLEAR_USERS'

interface initialInterface {
    usersShortInfo: userShortInfo[],
    countFriends: number,
    countSubscriptions: number,
    countSubscribers: number
}


const initialState: initialInterface = {
    usersShortInfo: [],
    countFriends: 0,
    countSubscriptions: 0,
    countSubscribers: 0
}

export const usersReducer = (state = initialState, action: any) => {
    let stateCopy = {...state, usersShortInfo: state.usersShortInfo.map(u => u)}
    switch (action.type) {

        case SET_USERS : {
            stateCopy.usersShortInfo = action.usersShortInfo

            return stateCopy
        }

        case SET_USERS_FRIENDS_COUNT : {
            stateCopy.countFriends = action.countFriends

            return stateCopy
        }

        case SET_USERS_SUBSCRIBERS_COUNT : {
            stateCopy.countSubscribers = action.countSubscribers

            return stateCopy
        }

        case SET_USERS_SUBSCRIPTIONS_COUNT : {
            stateCopy.countSubscriptions = action.countSubscriptions

            return stateCopy
        }

        case SET_CHANGE_USER_STATUS : {
            stateCopy = {...state, usersShortInfo: [...state.usersShortInfo]}
            stateCopy.usersShortInfo.forEach((user: userShortInfo) => {
                if (user.id === action.id) {
                    user.status = action.status
                }
            })

            return stateCopy
        }

        case CLEAR_USERS : {
            stateCopy = initialState

            return stateCopy
        }

        default:
            return stateCopy
    }
}

export const setUsers = (usersShortInfo: []) => {
    return {
        type: SET_USERS, usersShortInfo
    }
}

export const setUserSubscriptionsCount = (countSubscriptions: number) => {
    return {
        type: SET_USERS_SUBSCRIPTIONS_COUNT, countSubscriptions
    }
}

export const setUserFriendsCount = (countFriends: number) => {
    return {
        type: SET_USERS_FRIENDS_COUNT, countFriends
    }
}

export const setUserSubscribersCount = (countSubscribers: number) => {
    return {
        type: SET_USERS_SUBSCRIBERS_COUNT, countSubscribers
    }
}

export const setUserChangeStatus = (id: string, status: string) => {
    return {
        type: SET_CHANGE_USER_STATUS, id, status
    }
}

export const clearUsers = () => {
    return {
        type: SET_CHANGE_USER_STATUS
    }
}