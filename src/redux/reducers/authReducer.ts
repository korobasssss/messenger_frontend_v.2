const SET_USER_DATA = 'SET_USER_DATA'
const SET_EMAIL_DATA = 'SET_EMAIL_DATA'
const SET_NICKNAME_DATA = 'SET_NICKNAME_DATA'

const SET_MESSAGE = 'SET_MESSAGE'
const CLEAR_MESSAGE = 'CLEAR_MESSAGE'

const CLEAR_AUTH = 'CLEAR_AUTH'

const SET_FETCHING = 'SET_FETCHING'

const initialState = {
    email: '',
    nickname: '',

    message: '',
    isFetching: false
}

export const authReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_DATA : {
            stateCopy.email = action.email

            return stateCopy
        }

        case SET_EMAIL_DATA : {
            stateCopy.email = action.email
            console.log(stateCopy.email)

            return stateCopy
        }

        case SET_NICKNAME_DATA : {
            stateCopy.nickname = action.nickname
            console.log(stateCopy.nickname)

            return stateCopy
        }

        case SET_MESSAGE : {
            stateCopy.message = action.message

            return stateCopy
        }

        case CLEAR_MESSAGE : {
            stateCopy.message = ''

            return stateCopy
        }

        case CLEAR_AUTH : {
            stateCopy = initialState

            return stateCopy
        }

        case SET_FETCHING : {
            stateCopy.isFetching = action.isFetching

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setData = (data : object) => {
    return {
        type: SET_USER_DATA, data
    }
}

export const setEmail = (email : string) => {
    return {
        type: SET_EMAIL_DATA, email
    }
}

export const setNickname = (nickname : string) => {
    return {
        type: SET_NICKNAME_DATA, nickname
    }
}

export const setMessage = (message : string) => {
    return {
        type: SET_MESSAGE, message
    }
}

export const clearMessage = () => {
    return {
        type: CLEAR_MESSAGE
    }
}

export const clearAuth = () => {
    return {
        type: CLEAR_AUTH
    }
}

export const setFetching = (isFetching: boolean) => {
    return {
        type: SET_FETCHING, isFetching
    }
}