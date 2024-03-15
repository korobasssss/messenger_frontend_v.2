import {Main_path} from "@/app/paths/main";

export const Auth_path = {
    LOGIN:
        Main_path.AUTH + `/login`,
    REGISTRATION :
        Main_path.AUTH + `/registration`,
    FORGOT_PASSWORD :
        Main_path.AUTH + `/account/recovery`,
    RESTORE:
        Main_path.AUTH + `/account/restore`,
    ACTIVATION:
        Main_path.AUTH + '/account/activation',
    SUCCESSFUL_REGISTRATION:
        Main_path.AUTH + '/account/successful/registration'
}