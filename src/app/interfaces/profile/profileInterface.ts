import {OnePhotoInterface} from "@/app/interfaces/photo/photoInterface";
import {userShortInfo} from "@/app/interfaces/friends/friendsInterface";

export interface ProfileInterfaceState {
    profile: {
        name: string,
        bio: string,
        avatarUrl: string,
        coverUrl: string,
        birthDate: string
        status: string
    }
    auth: {
        nickname: string
    }
    photo : {
        photoUrl: OnePhotoInterface[]
        countPhoto: number
    }
    users: {
        usersShortInfo: userShortInfo[]
        countFriends: number
    }
}

export interface ProfileComponentInterface {
    name: string,
    bio: string,
    avatarUrl: string,
    coverUrl: string,
    status: string
    photoUrl: OnePhotoInterface[]
    countPhoto: number
    usersShortInfo: userShortInfo[]
    countFriends: number

    getData(): void
    getPhoto(): void,
    getCountPhoto(): void
    getRndFriend(): void
    getCountFriends(): void
}

export interface HeaderInterface {
    name: string,
    bio: string,
    avatarUrl: string,
    coverUrl: string,
    status: string

    nickname: string

    getData(): void
    action(id: string, action: string): void
    getNickname(): void
}

export interface HeaderComponentInterface {
    name: string,
    bio: string,
    avatarUrl: string,
    coverUrl: string,
    status: string

    nickname: string

    editProfile(): void
    toFriends(): void
}