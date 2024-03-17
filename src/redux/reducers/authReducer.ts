const SET_USER_DATA = 'SET_USER_DATA'
const SET_EMAIL_DATA = 'SET_EMAIL_DATA'
const SET_NICKNAME_DATA = 'SET_NICKNAME_DATA'

const initialState = {
    email: "",
    nickname: ""
}

export const authReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_DATA : {
            stateCopy.email = action.email
            stateCopy.nickname = action.nickname

            return stateCopy
        }

        case SET_EMAIL_DATA : {
            stateCopy.email = action.email

            return stateCopy
        }

        case SET_NICKNAME_DATA : {
            stateCopy.nickname = action.nickname

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