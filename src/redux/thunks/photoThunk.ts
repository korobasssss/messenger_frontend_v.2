import {Dispatch} from "redux";
import {setCountPhoto, setPhotoUrl} from "@/redux/reducers/photoReducer";
import {PhotoAPI} from "@/api/photo/photoAPI";
import {setMessage} from "@/redux/reducers/authReducer";
import {setAvatarUrl, setCoverUrl} from "@/redux/reducers/profileReducer";

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
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    GetPhoto() {
        return (dispatch: Dispatch) => {
            PhotoAPI.GetPhotoAPI({
                id: localStorage.getItem('idUser') as string
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
                        localStorage.setItem('token', '')
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
                        dispatch(setMessage('Плохое имя файла, выберите другой')) // todo мб сделать отдельные сообщения profile
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

    SetAvatar(input_avatarUrl: File) {
        return (dispatch: Dispatch) => {
            PhotoAPI.SetAvatarAPI( {
                input_avatarUrl: input_avatarUrl
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setAvatarUrl(response[1]))
                        break
                    }
                    case 400 : {
                        if (response[1] === 'File too big') {
                            dispatch(setMessage('Файл слишком большой'))
                        } else if (response[1] === 'Bad file name') {
                            dispatch(setMessage('Плохое имя файла, выберите другой'))
                        }
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
                        dispatch(setMessage('Плохое имя файла, выберите другой'))
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

    SetCover(input_coverUrl: File) {
        return (dispatch: Dispatch) => {
            PhotoAPI.SetCoverAPI({
                input_coverUrl: input_coverUrl,
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setCoverUrl(response[1]))
                        break
                    }
                    case 400 : {
                        if (response[1] === 'File too big') {
                            dispatch(setMessage('Файл слишком большой'))
                        } else if (response[1] === 'Bad file name') {
                            dispatch(setMessage('Плохое имя файла, выберите другой'))
                        }
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