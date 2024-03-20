import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export const Status = {
    SEND_FIRST: 'SEND_FIRST',
    SEND_SECOND: 'SEND_SECOND',
    FRIENDS: 'FRIENDS',
    NULL: 'null'
}

export const Actions = {
    CREATE: 'CREATE',
    DELETE_FRIEND: 'DELETE_FRIEND',
    ACCEPT: 'ACCEPT',
    REJECT: 'REJECT',
    DELETE_REQUEST: 'DELETE_REQUEST'
}



export interface userShortInfo {
    id: string,
    name: string,
    bio: string,
    status: string,
    avatarUrl: string,
}
export interface HeaderComponentInterface {

    countFriends: number,
    countSubscriptions: number,
    countSubscribers: number

    getCountFriends(): void
    getCountSubscriptions(): void
    getCountSubscribers(): void

    getFriends(): void
    getSubscriptions(): void
    getSubscribers(): void
    getSearch(): void
}

export interface UsersInterfaceState {
    users: {
        usersShortInfo: userShortInfo[]
        countFriends: number,
        countSubscriptions: number,
        countSubscribers: number
    }

}

export interface UsersInterfaceComponent {
    users: userShortInfo[],
    setButtonActionPressed(button: boolean): void
}

export interface OneUserInterface {
    oneUser: userShortInfo,
    action(id: string, action: string): void
    setButtonActionPressed(button: boolean): void
}

export interface OneUserComponentInterface {
    oneUser: userShortInfo,
    action(action: string): void

    toProfile(): void
}

export interface TypeButtons {
    status: string
    action(action: string): void
}