import {userShortInfo} from "@/app/interfaces/friends/friendsInterface";

export interface Friends_profileInterface {
    users: userShortInfo[],
    countFriends: number,

    getRndFriends(): void
}

export interface Friends_profileComponentInterface {
    users: userShortInfo[],
    countFriends: number,

    toFriends(): void
}