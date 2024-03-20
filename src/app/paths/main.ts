import Cookies from "js-cookie";

export const MAIN_PATH = '/pages/' // todo мб папку можно поменять
export const MAIN_PATH_MY = '/pages/' + Cookies.get('id') // todo мб папку можно поменять
export const MAIN_PATH_FOR_AUTH= '/pages' // todo мб папку можно поменять
export const Main_path = {
    AUTH: '/auth',
    PROFILE: '/profile',
    USERS: '/users',
    PHOTO: '/photo',
    SETTINGS: '/settings',
}