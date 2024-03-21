const SET_USER_DATA = 'SET_USER_DATA'

const SET_USER_NAME = 'SET_USER_NAME'
const SET_USER_BIRTH_DATE = 'SET_USER_BIRTH_DATE'
const SET_USER_BIO = 'SET_USER_BIO'
const SET_USER_AVATAR_URL = 'SET_USER_AVATAR_URL'
const SET_USER_COVER_URL = 'SET_USER_COVER_URL'
const SET_USER_STATUS = 'SET_USER_STATUS'

const CLEAR_PROFILE = 'CLEAR_PROFILE'

const initialState = {
    name: "",
    birthDate: "",
    bio: "",
    avatarUrl: "",
    coverUrl: "",
    status: "",
}

export const profileReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {
        case SET_USER_DATA : {

            stateCopy.name = action.name
            stateCopy.birthDate = action.birthDate
            stateCopy.bio = action.bio
            stateCopy.avatarUrl = action.avatarUrl
            stateCopy.coverUrl = action.coverUrl
            stateCopy.status = action.status

            return stateCopy
        }

        case SET_USER_NAME : {
            stateCopy.name = action.name

            return stateCopy
        }

        case SET_USER_BIRTH_DATE : {
            stateCopy.birthDate = action.birthDate

            return stateCopy
        }

        case SET_USER_BIO : {
            stateCopy.bio = action.bio

            return stateCopy
        }

        case SET_USER_AVATAR_URL : {
            stateCopy.avatarUrl = action.avatarUrl

            return stateCopy
        }

        case SET_USER_COVER_URL : {
            stateCopy.coverUrl = action.coverUrl

            return stateCopy
        }

        case SET_USER_STATUS : {
            stateCopy.status = action.status

            return stateCopy
        }

        case CLEAR_PROFILE : {
            stateCopy = initialState

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setUserData = (name: string,
                            birthDate: string,
                            bio: string,
                            avatarUrl: string,
                            coverUrl: string,
                            status: string) => {
    return {
        type: SET_USER_DATA, name, birthDate, bio, avatarUrl, coverUrl, status
    }
}

export const setName = (name: string) => {
    return {
        type: SET_USER_NAME, name
    }
}

export const setBirthDate = (birthDate: string) => {
    return {
        type: SET_USER_BIRTH_DATE, birthDate
    }
}

export const setBio = (bio: string) => {
    return {
        type: SET_USER_BIO, bio
    }
}

export const setAvatarUrl = (avatarUrl: string) => {
    return {
        type: SET_USER_AVATAR_URL, avatarUrl
    }
}

export const setCoverUrl = (coverUrl: string) => {
    return {
        type: SET_USER_COVER_URL, coverUrl
    }
}

export const clearProfile = () => {
    return {
        type: CLEAR_PROFILE
    }
}
