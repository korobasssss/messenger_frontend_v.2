import {OnePostInterface} from "@/app/interfaces/posts/postsInterfaceComponent";
import {Comment} from "@/app/interfaces/comments/commentsInterface";
import {comment} from "postcss";

const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'

const SET_ONE_POST_OPENED = 'SET_ONE_POST_OPENED'

const SET_ONE_COMMENT_USER_DATA = 'SET_ONE_COMMENT_USER_DATA'

const SET_DELETE_POST = 'SET_DELETE_POST'


const SET_CLEAR_COMMENTS = 'SET_CLEAR_COMMENTS'




const initialState : {posts: OnePostInterface[], comments: Comment[], onePostOpened: OnePostInterface} = {
    posts: [],
    comments: [],

    onePostOpened: {
        postId: "",
        time: "1962-01-01",
        text: "",
        photoUrl: [],
        likeCount: "",
        commentCount: "",
        isLiked: false
    }
}

export const postsReducer = (state = initialState, action: any) => {
    let stateCopy = {...state}
    switch (action.type) {

        case SET_POSTS : {
            stateCopy.posts = action.posts

            return stateCopy
        }

        case SET_COMMENTS : {
            stateCopy.comments = action.comments

            console.log(stateCopy.comments, ' comments')

            return stateCopy
        }

        case SET_ONE_POST_OPENED : {
            stateCopy.onePostOpened = action.onePostOpened

            return stateCopy
        }

        case SET_CLEAR_COMMENTS : {
            stateCopy.comments = []

            return stateCopy
        }

        case SET_ONE_COMMENT_USER_DATA : {
            if (action.flag) {
                stateCopy.comments = []
            }
            stateCopy.comments = [...stateCopy.comments, action.comment]
            return stateCopy
        }

        case SET_DELETE_POST : {

            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                if (stateCopy.posts[index].postId === action.postId) {
                    stateCopy.posts.splice(index, 1)
                }
            }
            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPosts = (posts: OnePostInterface[]) => {
    return {
        type: SET_POSTS, posts
    }
}

export const setComments = (comments: any[]) => {
    return {
        type: SET_COMMENTS, comments
    }
}

export const setOnePostOpened = (onePostOpened: OnePostInterface) => {
    return {
        type: SET_ONE_POST_OPENED, onePostOpened
    }
}

export const setOneCommentUserData = (comment: Comment, flag: boolean) => { // flag это метка, первый ли элемент массива, если да - очищаем старый
    return {
        type: SET_ONE_COMMENT_USER_DATA, comment, flag
    }
}
export const setDeletePost = (postId: string) => {
    return {
        type: SET_DELETE_POST, postId
    }
}

export const clearComments = () => {
    return {
        type: SET_CLEAR_COMMENTS
    }
}