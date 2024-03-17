export interface RegistrationOrAuthorizationAxiosInterface {
    input_email : string,
    input_nickname: string,
    input_password: string,
}

export interface RegistrationInterfaceAPI {
    input_email : string,
    input_nickname: string,
    input_password: string,
    input_confirmPassword: string,
}

export interface RecoveryInterfaceAPI {
    input_email: string
}

export interface AuthDataInterfaceAPI {
    id: string
}

export interface RequestChangingEmailInterfaceAPI {
    input_password: string,
    input_email: string
}

export interface ConfirmChangingEmailInterfaceAPI {
    newEmail: string
}

export interface ChangeNicknameInterfaceAPI {
    input_nickname: string
}

export interface GetCodeForChangingPasswordInterfaceAPI {
    input_password: string,
}

export interface ChangePasswordInterfaceAPI {
    input_code: string,
    input_password: string,
}

export interface DeleteAccountInterfaceAPI {
    input_password: string
}