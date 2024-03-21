import {OnePostInterface} from "@/app/interfaces/posts/postsInterfaceComponent";

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
    getPhotoCount(): void
}
export interface Photo_profileInterfaceComponent {
    photoUrl: OnePhoto[],
    countPhoto: number
}
export interface PhotoInterfaceComponent {
    photoUrl: OnePhoto[],
    countPhoto: number

    toOnePhoto(postId: string, photoId: string, photoUrl: string): void
    toProfile(): void
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
    posts: {
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

    getPosts(): void
    getOnePost(postId: string): void
    likePost(postId: string): void
}

export interface OnePostComponentInterface {
    onePostOpened: OnePostInterface
    toProfile() : void

    setAction(flag: boolean): void
}