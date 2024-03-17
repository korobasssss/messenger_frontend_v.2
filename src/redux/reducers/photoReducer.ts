import {OnePhoto} from "@/app/interfaces/photo/photoInterface";

const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_USER_COUNT_PHOTO = 'SET_USER_COUNT_PHOTO'

const initialState: {photoUrl: OnePhoto[], countPhoto: number} = {
    photoUrl: [],
    countPhoto: 0
}

export const photoReducer = (state = initialState, action : any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_USER_PHOTO : {
            stateCopy = {...state, photoUrl: [...action.photoUrl]}

            return stateCopy
        }

        case SET_USER_COUNT_PHOTO : {
            stateCopy.countPhoto = action.countPhoto

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