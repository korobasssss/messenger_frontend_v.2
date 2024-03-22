import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import {Dispatch} from "redux";
import {
    clearComments,
    setDeletePost,
    setOneCommentUserData,
    setOnePostOpened,
    setPosts
} from "@/redux/reducers/postsReducer";
import {BlogAPI} from "@/api/post/postsAPI";
import {PhotoAPI} from "@/api/photo/photoAPI";
import {clearMessage, setFetching, setMessage} from "@/redux/reducers/authReducer";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {CookieClear} from "@/redux/thunks/authThunk";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {ProfileMessagesRU} from "@/redux/messages/profileMessages";
import {PostMessagesEN, PostMessagesRU} from "@/redux/messages/postMessages";

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
                        CookieClear()
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
                        CookieClear()
                        break
                    }
                    case 400 : {
                    }
                }
            })
        }
    },

    CreatePost(input_postText: string, input_postPhoto: SetPhotoInterface[], router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            dispatch(setFetching(true))
            BlogAPI.NewPostAPI({
                input_postText: input_postText
            }).then(response => {
                switch (response[0]) {
                    case 200: {
                        if (input_postPhoto.length === 0 ) {
                            router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)
                            dispatch(setFetching(false))
                        } else {
                            for(let i = 0; i < input_postPhoto.length; i++) {
                                PhotoAPI.SetPostPhotoAPI({
                                    input_postPhoto: input_postPhoto[i].input_postPhoto,
                                    postId: response[1]
                                }).then(response => {
                                    switch (response[0]) {
                                        case 200 : {
                                            dispatch(setFetching(false))
                                            dispatch(clearMessage())
                                            router.push(MAIN_PATH + Cookies.get(Cookie_names.ID) + Main_path.PROFILE)
                                            break
                                        }
                                        case 400 : {
                                            dispatch(setFetching(false))
                                            if (response[1] === PostMessagesEN.FILE_TOO_BIG) {
                                                dispatch(setMessage(ProfileMessagesRU.FILE_TOO_BIT))
                                            } else if (response[1] === PostMessagesEN.BAD_NAME) {
                                                dispatch(setMessage(PostMessagesRU.BAD_NAME + ' ' + i))
                                            }
                                            break
                                        }
                                        case 401: {
                                            dispatch(setFetching(false))
                                            CookieClear()
                                            break
                                        }
                                    }
                                })
                            }
                        }
                        dispatch(clearMessage())
                        break
                    }
                    case 400: {
                        dispatch(setFetching(false))
                        dispatch(setMessage(PostMessagesRU.SYMBOLS_LIMIT))
                        break
                    }
                    case 401 : {
                        dispatch(setFetching(false))
                        CookieClear()
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
                        const comments = JSON.parse(JSON.stringify(response[1]));
                        for (let i = 0; i < comments.length; i++) {
                            ProfileAPI.ProfileGetDataAPI( {
                                id: comments[i].userId
                            }).then(response => {
                                switch (response[0]) {
                                    case 200 : {
                                        comments[i].name = response[1].name
                                        comments[i].avatarUrl = response[1].avatarUrl
                                        if (i === 0) {
                                            dispatch(setOneCommentUserData(comments[i], true))
                                        } else {
                                            dispatch(setOneCommentUserData(comments[i], false))
                                        }
                                    }
                                }
                            })
                        }
                        if (comments.length === 0) {
                            dispatch(clearComments())
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
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
                        CookieClear()
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
                        CookieClear()
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
                        CookieClear()
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
                        dispatch(setDeletePost(postId))
                        break
                    }
                    case 400: {
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
                        CookieClear()
                        break
                    }
                    case 400 : {
                        break
                    }
                }
            })
        }
    },
}