export interface SettingsState {
    auth: {
        message: string
    }
}

export interface SettingsInterface {
    message: string

    changeEmail(input_password: string, input_email: string): void,
    setOldPassword(input_old_password: string): void,
    changePassword(code: string, newPassword: string, newPasswordConfirm: string): void

    setMessage(message: string): void
}

export interface SettingsComponentInterface {
    message: string

    input_email: string
    input_password_email: string
    input_password: string
    input_code: string
    input_password_new: string
    input_password_new_confirm: string

    setInput_email(text: string): void
    setInput_password_email(text: string): void
    setInput_password(text: string): void
    setInput_code(text: string): void
    setInput_password_new(text: string): void
    setInput_password_new_confirm(text: string): void

    setButtonChangeEmail(flag: boolean): void
    setButtonSetOldPassword(flag: boolean): void
    setButtonChangePassword(flag: boolean): void

    setMessage(message: string): void

    isEmailEdit: boolean
    isPasswordEdit: boolean
    isPasswordEditCode: boolean

    setEmailEdit(flag: boolean): void
    setPasswordEdit(flag: boolean): void
    setPasswordEditCode(flag: boolean): void
}