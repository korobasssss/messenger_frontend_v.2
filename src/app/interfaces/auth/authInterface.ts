import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {clearMessages} from "@/redux/thunks/authThunk";

export interface Main_authInterface {
    message: string

    authorization(input_email: string, input_nickname: string, input_password: string, router: AppRouterInstance): void
    registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                  input_name: string, input_birthDate: string, router: AppRouterInstance): void
    recovery(input_email: string, router: AppRouterInstance): void
    clearMessage(): void
}

export interface Main_authState {
    auth: {
        message: string
    }
}

export interface LoginInterface {
    authorization(input_email: string, input_nickname: string, input_password: string, router: AppRouterInstance): void
    clearMessage(): void
}

export interface LoginComponentInterface {
    input_login: string
    input_password: string
    setEnterPressed(isEnterPressed: boolean): void
    setInput_login(input_login: string): void
    setInput_password(input_password: string): void
    registration(): void
    recovery(): void
}

export interface RegistrationInterface {
    registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                 input_name: string, input_birthDate: string, router: AppRouterInstance): void
}

export interface RegistrationComponentInterface {
    input_nickname: string
    input_email: string
    input_password: string
    input_confirm_password: string
    input_name: string
    input_date: string

    setInput_nickname(input_nickname: string): void
    setInput_email(input_nickname: string): void
    setInput_password(input_nickname: string): void
    setInput_confirm_password(input_nickname: string): void
    setInput_name(input_nickname: string): void
    setInput_date(input_nickname: string): void

    setRegisterPressed(isRegisterPressed: boolean): void
}

export interface RecoveryInterface {
    recovery(input_email: string, router: AppRouterInstance): void
}

export interface RestoreInterfaceComponent {
    recovery(input_email: string): void
    cancel(): void
}

export interface ActivationInterface {
    activation_method(): void
    clearMessage(): void
    message: string
}
export interface Main_messageInterface {
    activation_account(): void
    change_email(): void
    clearMessage(): void
    message: string
}
export interface ChangeEmailInterface {
    change_email(): void
    message: string
}
export interface ActivationInterfaceComponent {
    title: string
    message: string
    toLogin(): void
}