
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

export interface CommentsInterfaceComponent {
    comments: Comment[]
    getComments(postId: string): void
}

export interface OneCommentInterface {
    oneComment: Comment,
    likeComment(commentId: string): void
    deleteComment(commentId: string): void
}