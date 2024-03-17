export const Status = {
    SEND_FIRST: 'SEND_FIRST',
    SEND_SECOND: 'SEND_SECOND',
    FRIENDS: 'FRIENDS',
    NULL: 'NULL'
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
    description: string,
    status: string,
    avatar: string
}
export interface HeaderComponentInterface {
    getFriends(): void
    getSubscriptions(): void
    getSubscribers(): void
    getSearch(): void
}

export interface UsersInterfaceState {
    users: {
        users: userShortInfo[]
    }

}

export interface UsersInterfaceComponent {
    users: userShortInfo[]
}

export interface OneUserInterface {
    oneUser: userShortInfo,
    action(id: string, action: string): void
}

export interface OneUserComponentInterface {
    oneUser: userShortInfo,
    action(action: string): void
}

export interface TypeButtons {
    status: string
    action(action: string): void
}