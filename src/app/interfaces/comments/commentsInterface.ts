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

    setAction(flag: boolean): void

    getOnePost(postId: string): void
}

export interface CommentsInterfaceComponent {
    postId: string
    input_comment: string

    setInput_comment(input_comment: string): void

    comments: Comment[]

    setButtonSetCommentClicked(flag: boolean): void

    setButtonClicked(flag: boolean): void
}

export interface OneCommentInterface {
    oneComment: Comment,

    setButtonClicked(flag: boolean): void

    likeComment(commentId: string): void

    deleteComment(commentId: string): void

    getOnePost(postId: string): void
}
export interface OneCommentComponentInterface {
    oneComment: Comment,

    setButtonClicked(flag: boolean): void

    setButtonDeleteCommentClicked(flag: boolean): void

    setButtonLikeCommentClicked(flag: boolean): void
}