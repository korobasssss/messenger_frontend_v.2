import {OnePhoto} from "@/redux/reducers/photoReducer";
import {userShortInfo} from "@/redux/reducers/usersReducer";

export interface ProfileInterfaceState {
    profile: {
        name: string,
        bio: string,
        avatarUrl: string,
        coverUrl: string,
        status: string
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

export interface HeaderComponentInterface {
    name: string,
    bio: string,
    avatarUrl: string,
    coverUrl: string,
    status: string
}