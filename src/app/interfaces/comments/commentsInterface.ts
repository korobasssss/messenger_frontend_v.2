
export interface Comment {
    commentId: string
    userId: string,
    text: string,
    time: string
    likeCount: string,
    isLiked: boolean
    name: string
    avatarUrl: string
}
export interface CommentsInterfaceState {
    posts: {
        comments: Comment[]
    }
}

export interface CommentsInterface {
    postId: string

    comments: Comment[]
    getComments(postId: string): void
    setComment(postId: string, input_comment: string): void
}

export interface CommentsInterfaceComponent {
    postId: string

    comments: Comment[]
    setComment(postId: string, input_comment: string): void
}

export interface OneCommentInterface {
    oneComment: Comment,
    likeComment(commentId: string): void
    deleteComment(commentId: string): void
}