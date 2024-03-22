import {Dispatch} from "redux";
import {clearPhoto, setCountPhoto, setPhotoUrl} from "@/redux/reducers/photoReducer";
import {PhotoAPI} from "@/api/photo/photoAPI";
import {setFetching, setMessage} from "@/redux/reducers/authReducer";
import {setAvatarUrl, setCoverUrl} from "@/redux/reducers/profileReducer";
import {CookieClear} from "@/redux/thunks/authThunk";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {PostMessagesEN, PostMessagesRU} from "@/redux/messages/postMessages";
import {ProfileMessagesRU} from "@/redux/messages/profileMessages";

export const fileSize = 2097152

export const photoThunk = {

    GetPhotoCount() {
        return (dispatch: Dispatch) => {
            PhotoAPI.GetPhotoCountAPI().then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setCountPhoto(response[1]))
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

    GetPhoto() {
        return (dispatch: Dispatch) => {
            dispatch(clearPhoto())
            PhotoAPI.GetPhotoAPI({
                id: Cookies.get(Cookie_names.ID_CURRENT) as string
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setPhotoUrl(response[1]))
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

    DeleteAvatar(deleteAvatarUrl: string) {
        return (dispatch: Dispatch) => {
            PhotoAPI.DeleteAvatarPhotoAPI({
                deleteAvatarUrl: deleteAvatarUrl
            }).then(response => {
                switch (response) {
                    case 200 : {
                        break
                    }
                    case 400 : {
                        dispatch(setMessage(PostMessagesRU.BAD_NAME))
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

    DeleteCover(deleteCoverUrl: string) {
        return (dispatch: Dispatch) => {
            PhotoAPI.DeleteCoverPhotoAPI({
                deleteCoverUrl: deleteCoverUrl
            }).then(response => {
                switch (response) {
                    case 200 : {
                        break
                    }
                    case 400 : {
                        dispatch(setMessage(PostMessagesRU.BAD_NAME))
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

    SetAvatar(input_avatarUrl: File) {
        return (dispatch: Dispatch) => {
            dispatch(setFetching(true))
            PhotoAPI.SetAvatarAPI( {
                input_avatarUrl: input_avatarUrl
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setAvatarUrl(response[1]))
                        break
                    }
                    case 400 : {
                        if (response[1] === PostMessagesEN.FILE_TOO_BIG) {
                            dispatch(setMessage(ProfileMessagesRU.FILE_TOO_BIT))
                        } else if (response[1] === PostMessagesEN.BAD_NAME) {
                            dispatch(setMessage(PostMessagesRU.BAD_NAME))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                }
            })
            dispatch(setFetching(false))
        }
    },

    SetCover(input_coverUrl: File) {
        return (dispatch: Dispatch) => {
            dispatch(setFetching(true))
            PhotoAPI.SetCoverAPI({
                input_coverUrl: input_coverUrl,
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setCoverUrl(response[1]))
                        break
                    }
                    case 400 : {
                        if (response[1] === PostMessagesEN.FILE_TOO_BIG) {
                            dispatch(setMessage(ProfileMessagesRU.FILE_TOO_BIT))
                        } else if (response[1] === PostMessagesEN.BAD_NAME) {
                            dispatch(setMessage(PostMessagesRU.BAD_NAME))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                }
            })
            dispatch(setFetching(false))
        }
    }
}