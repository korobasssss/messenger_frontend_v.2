import {OnePostInterface} from "@/app/interfaces/posts/postsInterface";
import {Comment} from "@/app/interfaces/comments/commentsInterface";

const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'

const SET_ONE_POST_OPENED = 'SET_ONE_POST_OPENED'

const SET_ONE_COMMENT_USER_DATA = 'SET_ONE_COMMENT_USER_DATA'


const initialState : {posts: OnePostInterface[], comments: Comment[], onePostOpened: OnePostInterface} = {
    posts: [],
    comments: [],

    onePostOpened: {
        postId: "",
        time: "",
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

            return stateCopy
        }

        case SET_ONE_POST_OPENED : {
            stateCopy.onePostOpened = action.onePostOpened

            return stateCopy
        }

        case SET_ONE_COMMENT_USER_DATA : {

            stateCopy= {...state, comments: [...state.comments]}
            for (let index = 0; index < stateCopy.comments.length; index++) {
                if (stateCopy.comments[index].commentId === action.commentId) {
                    stateCopy.comments[index].name = action.name
                    stateCopy.comments[index].avatarUrl = action.avatarUrl
                }
            }
            return stateCopy
        }

        default : {
            return stateCopy
        }
    }
}

export const setPosts = (posts: []) => {
    return {
        type: SET_POSTS, posts
    }
}

export const setComments = (comments: []) => {
    return {
        type: SET_COMMENTS, comments
    }
}

export const setOnePostOpened = (onePostOpened: OnePostInterface) => {
    return {
        type: SET_ONE_POST_OPENED, onePostOpened
    }
}

export const setOneCommentUserData = (commentId: string, name: string, avatarUrl: string) => {
    return {
        type: SET_ONE_COMMENT_USER_DATA, commentId, name, avatarUrl
    }
}