const SET_POSTS = 'SET_POSTS'
const SET_COMMENTS = 'SET_COMMENTS'

const initialState = {
    posts: [],
    comments: []
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