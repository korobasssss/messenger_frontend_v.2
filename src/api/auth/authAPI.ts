import {instance, Paths} from "@/api/api_init";
import {
    AuthDataInterfaceAPI, RequestChangingEmailInterfaceAPI, ChangeNicknameInterfaceAPI,
    GetCodeForChangingPasswordInterfaceAPI, RecoveryInterfaceAPI, ChangePasswordInterfaceAPI,
    RegistrationInterfaceAPI, RegistrationOrAuthorizationAxiosInterface, ConfirmChangingEmailInterfaceAPI,
    DeleteAccountInterfaceAPI
} from "@/api/auth/authInterfaceAPI";

export const Auth = {

    async AuthorizationAPI(data: RegistrationOrAuthorizationAxiosInterface) {
        try {
            const response = await instance.post(
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
            const response = await instance.post(
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
            const response = await instance.put(
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
            const response = await instance.put(
                Paths.AUTH + '/active/account',
                {
                    "id": localStorage.getItem('id')
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async AuthDataAPI(data: AuthDataInterfaceAPI) {
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

