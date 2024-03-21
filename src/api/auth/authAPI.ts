import {instance, instanceAuth, Paths, setToken} from "@/api/api_init";
import {
    AuthDataInterfaceAPI, RequestChangingEmailInterfaceAPI, ChangeNicknameInterfaceAPI,
    GetCodeForChangingPasswordInterfaceAPI, RecoveryInterfaceAPI, ChangePasswordInterfaceAPI,
    RegistrationInterfaceAPI, RegistrationOrAuthorizationAxiosInterface, ConfirmChangingEmailInterfaceAPI,
    DeleteAccountInterfaceAPI
} from "@/api/auth/authInterfaceAPI";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const AuthAPI = {

    async AuthorizationAPI(data: RegistrationOrAuthorizationAxiosInterface) {
        try {
            const response = await instanceAuth.post(
                Paths.AUTH + '/login',
                {
                    email: data.input_email,
                    nickname: data.input_nickname,
                    password: data.input_password,
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async RegistrationAPI(data: RegistrationInterfaceAPI) { // registration
        try {
            const response = await instanceAuth.post(
                Paths.AUTH + '/registration',
                {
                    email: data.input_email,
                    nickname: data.input_nickname,
                    password: data.input_password,
                    confirmPassword: data.input_confirmPassword
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async RecoveryAccountAPI(data: RecoveryInterfaceAPI) {
        try {
            const response = await instanceAuth.put(
                Paths.AUTH + '/forget/password',
                {
                    email: data.input_email
                }
            );
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async ActivationAccountAPI() {
        try {
            const response = await instanceAuth.put(
                Paths.AUTH + '/active/account',
                {
                    "id": Cookies.get(Cookie_names.ID)
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async AuthDataAPI(data: AuthDataInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.AUTH + `/data/${data.id}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async RequestChangeEmailAPI(data: RequestChangingEmailInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.AUTH + '/change/email',
                {
                    "password": data.input_password,
                    "newEmail": data.input_email
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ConfirmChangingEmailAPI(props: ConfirmChangingEmailInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.put(
                Paths.AUTH + '/confirm/email',
                {
                    "email": props.newEmail
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeNicknameAPI(data: ChangeNicknameInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.AUTH + '/change/nickname',
                {
                    nickname: data.input_nickname
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetCodeForChangingPasswordAPI(props: GetCodeForChangingPasswordInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.AUTH + '/change/password',
                {
                    password: props.input_password,
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangePasswordAPI(data: ChangePasswordInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.put(
                Paths.AUTH + '/confirm/password',
                {
                    oneTimeCode: data.input_code,
                    newPassword: data.input_password
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAccountAPI(data: DeleteAccountInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.put(
                Paths.AUTH + '/block',
                {
                    password: data.input_password
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}

