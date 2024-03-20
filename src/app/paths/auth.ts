import {Main_path, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";

export const Auth_path = {
    LOGIN:
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + `/login`,
    REGISTRATION :
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + `/registration`,
    FORGOT_PASSWORD :
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + `/account/recovery`,
    RESTORE:
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + `/account/restore`,
    ACTIVATION:
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + '/account/activation',
    CHANGE_EMAIL:
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + '/account/email',
    SUCCESSFUL_REGISTRATION:
        MAIN_PATH_FOR_AUTH + Main_path.AUTH + '/account/successful/registration'
}