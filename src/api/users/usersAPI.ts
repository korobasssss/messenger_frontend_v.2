import {instance, Paths} from "@/api/api_init";
import {ActionUsersInterfaceAPI} from "@/api/users/usersInterface";

export const Users = {
    async GetSearchAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + '/users'
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscribersAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscribers/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscriptionsAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscriptions/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetFriendsAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetRandomFriendsAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/random/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountFriendsAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/friends/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscriptionsAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscriptions/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscribersAxios() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscribers/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ActionUsersAxios(data: ActionUsersInterfaceAPI) {
        try {
            const response = await instance.post(
                Paths.SOCIAL + `/action`,
                {
                    secondUser: data.idOtherUser,
                    action: data.action
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}