import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const MAIN_PATH = '/pages/' // todo мб папку можно поменять
export const MAIN_PATH_MY = '/pages/' + Cookies.get(Cookie_names.ID) // todo мб папку можно поменять
export const MAIN_PATH_FOR_AUTH= '/pages' // todo мб папку можно поменять
export const Main_path = {
    AUTH: '/auth',
    PROFILE: '/profile',
    USERS: '/users',
    PHOTO: '/photo',
    SETTINGS: '/settings',
}