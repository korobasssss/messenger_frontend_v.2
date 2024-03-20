import {OnePostInterface} from "@/app/interfaces/posts/postsInterface";

export interface OnePhoto {
    postId: string,
    photoId: string,
    url: string
}

export interface Photo_profileInterfaceState {
    photo: {
        photoUrl: OnePhoto[],
        countPhoto: number
    }
}

export interface Photo_profileInterface {
    photoUrl: OnePhoto[],
    countPhoto: number,

    getPhoto(): void
}
export interface Photo_profileInterfaceComponent {
    photoUrl: OnePhoto[],
    countPhoto: number
}


export interface NameInterfaceState {
    profile: {
        name: string
    }
}
export interface NameInterface {
    name: string
}

export interface OnePhotoInterfaceState {
    post: {
        onePostOpened: OnePostInterface
    }
}

export interface UserDataForPostInterfaceState {
    profile: {
        name: string,
        avatarUrl: string
    }
    auth: {
        nickname: string
    }
}
export interface UserDataForPostInterface {
    name: string,
    avatarUrl: string
    nickname: string
}

export interface OnePhotoInterface {
    onePostOpened: OnePostInterface

    getOnePost(postId: string): void
    likePost(postId: string): void
}

export interface OnePostComponentInterface {
    onePostOpened: OnePostInterface
    likePost(postIs: string): void
}