import {OnePhoto} from "@/app/interfaces/photo/photoInterface";

const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_USER_COUNT_PHOTO = 'SET_USER_COUNT_PHOTO'

const CLEAR_PHOTO = 'CLEAR_PHOTO'
const CLEAR_PHOTO_ONLY = 'CLEAR_PHOTO'

const initialState: {photoUrl: OnePhoto[], countPhoto: number} = {
    photoUrl: [],
    countPhoto: 0
}

export const photoReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_PHOTO : {
            stateCopy.photoUrl = []
            stateCopy = {...state, photoUrl: [...action.photoUrl]}

            return stateCopy
        }

        case SET_USER_COUNT_PHOTO : {
            stateCopy.countPhoto = action.countPhoto

            return stateCopy
        }

        case CLEAR_PHOTO_ONLY : {
            stateCopy.photoUrl = []

            return stateCopy
        }

        case CLEAR_PHOTO : {
            stateCopy = initialState

            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPhotoUrl = (photoUrl : []) => {
    return {
        type: SET_USER_PHOTO, photoUrl
    }
}

export const setCountPhoto = (countPhoto : number) => {
    return {
        type: SET_USER_COUNT_PHOTO, countPhoto
    }
}

export const clearPhotoReducer = () => {
    return {
        type: CLEAR_PHOTO
    }
}

export const clearPhoto = () => {
    return {
        type: CLEAR_PHOTO_ONLY
    }
}