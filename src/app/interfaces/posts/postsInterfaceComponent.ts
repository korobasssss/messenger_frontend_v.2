import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";

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

    getPhoto(): void
    getCountPhoto(): void
    getPosts(): void
}

export interface PostsInterfaceComponent {
    posts: []

    setAction(flag: boolean): void
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

    setAction(flag: boolean): void
}

export interface OnePostInterfacesComponent {
    onePost: OnePostInterface

    setIsButtonDeletePostPressed(flag: boolean): void
    setIsButtonLikePostPressed(flag: boolean): void

    toOnePost(): void
}