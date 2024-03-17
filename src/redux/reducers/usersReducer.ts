const SET_USERS = 'SET_USERS'
const SET_USERS_FRIENDS_COUNT = 'SET_USERS_FRIENDS_COUNT'
const SET_USERS_SUBSCRIPTIONS_COUNT = 'SET_USERS_SUBSCRIPTIONS_COUNT'
const SET_USERS_SUBSCRIBERS_COUNT = 'SET_USERS_SUBSCRIBERS_COUNT'

const SET_USER_NICKNAME = 'SET_USERS_NICKNAME'

// const SET_CHANGE_USER_STATUS = 'SET_CHANGE_USER_STATUS'

interface userShortInfo {
    id: string,
    name: string,
    nickname: string,
    description: string,
    status: string,
    avatar: string
}

interface initialInterface {
    usersShortInfo: userShortInfo[],
    countFriends: number,
    countSubscriptions: number,
    countSubscribers: number
}


const initialState: initialInterface = {
    usersShortInfo : [],
    countFriends: 0,
    countSubscriptions: 0,
    countSubscribers: 0
}

export const usersReducer = (state = initialState, action : any) => {
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

        case SET_USER_NICKNAME : {
            for (let index = 0; index < stateCopy.usersShortInfo.length; index++) {
                if (stateCopy.usersShortInfo[index].id === action.id) {
                    stateCopy.usersShortInfo[index].nickname = action.nickname
                }
            }
            return {...state, usersShortInfo: [...state.usersShortInfo]}
        }

        // case SET_CHANGE_USER_STATUS : {
        //     stateCopy= {...state, usersShortInfo: [...state.usersShortInfo]}
        //     stateCopy.usersShortInfo.forEach((user: User) => {
        //         if (user.id === action.id) {
        //             user.status = action.status
        //         }
        //     })
        //     return stateCopy
        // }

        default:
            return stateCopy
    }
}

export const setUsers = (usersShortInfo : []) => {
    return {
        type: SET_USERS, usersShortInfo
    }
}

export const setUserSubscriptionsCount = (countSubscriptions : number) => {
    return {
        type: SET_USERS_SUBSCRIPTIONS_COUNT, countSubscriptions
    }
}

export const setUserFriendsCount = (countFriends : number) => {
    return {
        type: SET_USERS_FRIENDS_COUNT, countFriends
    }
}

export const setUserSubscribersCount = (countSubscribers : number) => {
    return {
        type: SET_USERS_SUBSCRIBERS_COUNT, countSubscribers
    }
}

export const setUserNickname = (id: string, nickname : string) => {
    return {
        type: SET_USER_NICKNAME, id, nickname
    }
}


// export const setChangeUserStatus = (id: string, status: string | null) => {
//     return {
//         type: SET_CHANGE_USER_STATUS, id, status
//     }
// }