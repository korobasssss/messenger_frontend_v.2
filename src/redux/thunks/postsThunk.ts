import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import {Dispatch} from "redux";
import {setComments, setOneCommentUserData, setOnePostOpened, setPosts} from "@/redux/reducers/postsReducer";
import {BlogAPI} from "@/api/post/postsAPI";
import {PhotoAPI} from "@/api/photo/photoAPI";
import {clearMessage, setMessage} from "@/redux/reducers/authReducer";
import {AuthAPI} from "@/api/auth/authAPI";
import {ProfileAPI} from "@/api/profile/profileAPI";

export const postsThunk = {

    GetPosts() {
        return (dispatch : Dispatch) => {
            BlogAPI.GetPostsAPI().then(response => {
                switch (response[0]) {
                    case 200: {
                        dispatch(setPosts(response[1]))
                        break
                    }
                    case 400: {
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

    GetOnePostData(postId: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.GetPostDataAPI({
                postId: postId
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        dispatch(setOnePostOpened(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400 : {
                    }
                }
            })
        }
    },

    EditPost(postId: string, input_postText: string, input_postPhoto: SetPhotoInterface[], deletePhotoPostUrl: string[]) {
        return (dispatch: Dispatch) => {
            BlogAPI.EditPostAPI({
                postId: postId,
                input_postText:  input_postText
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        deletePhotoPostUrl.map((data: string) => {
                            response[1].photoUrl.map((url: { url: string, photoId: string }) => {
                                if (data === url.url) {
                                    PhotoAPI.DeletePhotoPostAPI({
                                        url: data,
                                        photoId: url.photoId,
                                        postId: postId,
                                    }).then(response => {
                                        switch (response[0]) {
                                            case 200 : {
                                                //ok
                                                break
                                            }
                                            case 400 : {
                                                dispatch(setMessage('Плохое имя файла, выберите другой'))
                                                break
                                            }
                                            case 401: {
                                                // bad token
                                                break
                                            }
                                        }
                                    })
                                }
                            })
                        })
                        for(let i = 0; i < input_postPhoto.length; i++) {
                            if (!input_postPhoto[i].flag) {
                                PhotoAPI.SetPostPhotoAPI({
                                    input_postPhoto: input_postPhoto[i].input_postPhoto,
                                    postId: postId
                                }).then(response => {
                                    switch (response[0]) {
                                        case 200 : {
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
                                        case 401: {
                                            // bad token
                                            break
                                        }
                                    }
                                })
                            }
                        }
                        dispatch(clearMessage())
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

    CreatePost(input_postText: string, input_postPhoto: SetPhotoInterface[]) {
        return (dispatch: Dispatch) => {
            BlogAPI.NewPostAPI({
                input_postText: input_postText
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        for(let i = 0; i < input_postPhoto.length; i++) {
                            PhotoAPI.SetPostPhotoAPI({
                                input_postPhoto: input_postPhoto[i].input_postPhoto,
                                postId: response[1]
                            }).then(response => {
                                switch (response[0]) {
                                    case 200 : {
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
                                    case 401: {
                                        // bad token
                                        break
                                    }
                                }
                            })
                        }
                        break
                    }
                    case 400: {
                        dispatch(setMessage('Лимит символов 1000'))
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

    GetCommentsToPost(postId: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.GetCommentsAPI({
                postId: postId,
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setComments(response[1]))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400 : {
                        break
                    }
                }
            })
        }
    },

    SetComment(postId: string, input_comment: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.SetCommentAPI({
                postId: postId,
                input_comment: input_comment
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400 : {
                        break
                    }
                }
            })
        }
    },

    LikePost(postId: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.LikePostAPI({
                postId: postId
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400: {
                        break
                    }
                }
            })
        }
    },

    LikeComment(commentId: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.LikeCommentAPI({
                commentId: commentId
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400 : {
                        break
                    }
                }
            })
        }
    },

    DeletePost(postId: string) {
        return (dispatch: Dispatch) =>{
            BlogAPI.DeletePostAPI({
                postId: postId
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        break
                    }
                    case 400: {
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

    DeleteComment(commentId: string) {
        return (dispatch: Dispatch) => {
            BlogAPI.DeleteCommentAPI({
                commentId: commentId
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 400 : {
                        break
                    }
                }
            })
        }
    },

    GetOneCommentData(userId: string, commentId: string) {
        return (dispatch: Dispatch) => {
            ProfileAPI.ProfileGetDataAPI({
                id: userId as string
            }).then(responseSocial => {
                switch (responseSocial[0]) {
                    case 200 : {
                        dispatch(setOneCommentUserData(
                            commentId, responseSocial[1].name,responseSocial[1].avatarUrl))
                        break
                    }
                    case 400: {
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