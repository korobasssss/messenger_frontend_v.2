export interface GetPostDataInterfaceAPI {
    postId: string
}

export interface NewPostInterfaceAPI {
    input_postText: string
}

export interface EditPostInterfaceAPI {
    postId: string,
    input_postText: string,
}

export interface DeletePostInterfaceAPI {
    postId: string
}

export interface LikePostInterfaceAPI {
    postId: string
}

export interface SetCommentInterfaceAPI {
    postId: string
    input_comment: string,
}

export interface GetCommentsInterfaceAPI {
    postId: string
}

export interface LikeCommentInterfaceAPI {
    commentId: string
}

export interface DeleteCommentInterfaceAPI {
    commentId: string
}