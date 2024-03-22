import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const MAIN_PATH = '/pages/'
export const MAIN_PATH_MY = '/pages/' + Cookies.get(Cookie_names.ID)
export const MAIN_PATH_FOR_AUTH= '/pages'
export const Main_path = {
    AUTH: '/auth',
    PROFILE: '/profile',
    USERS: '/users',
    PHOTO: '/photo',
    SETTINGS: '/settings',
}