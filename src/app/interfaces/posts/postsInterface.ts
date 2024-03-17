export interface PostPhotoInterface {
    url: string,
    photoId: string
}

export interface OnePostInterface {
    postId: string,
    time: string,
    text: string,
    photoUrl: PostPhotoInterface[],
    likeCount: string
    commentCount: string,
    isLiked: boolean
}

export interface PostsInterfaceState {
    posts: {
        posts: []
    }
}

export interface PostsInterface {
    posts: []
}

export interface OnePostUserDataInterfaceState {
    profile : {
        name: string,
        avatarUrl: string
    }
    auth : {
        nickname: string
    }
}

export interface OnePostUserDataInterface {
    name: string,
    avatarUrl: string
    nickname: string
}

export interface OnePostInterfaces {
    onePost: OnePostInterface,
    deletePost(postId: string): void
    likePost(postId: string): void
}