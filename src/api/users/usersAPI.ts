import {instance, Paths} from "@/api/api_init";
import {ActionUsersInterfaceAPI} from "@/api/users/usersInterface";
import Cookies from "js-cookie";

export const UsersAPI = {
    async GetSearchAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + '/users'
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscribersAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscribers/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscriptionsAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscriptions/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetFriendsAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetRandomFriendsAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/random/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountFriendsAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/friends/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscriptionsAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscriptions/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscribersAPI() {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscribers/${Cookies.get('id_current')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ActionUsersAPI(data: ActionUsersInterfaceAPI) {
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