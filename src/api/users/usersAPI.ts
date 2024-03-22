import {instance, Paths, setToken} from "@/api/api_init";
import {ActionUsersInterfaceAPI} from "@/api/users/usersInterface";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const UsersAPI = {
    async GetSearchAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
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
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscribers/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetSubscriptionsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/subscriptions/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetFriendsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetRandomFriendsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/relation/friends/random/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountFriendsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/friends/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscriptionsAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscriptions/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCountSubscribersAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/count/subscribers/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ActionUsersAPI(data: ActionUsersInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
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