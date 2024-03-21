import {Dispatch} from "redux";
import {AuthAPI} from "@/api/auth/authAPI";
import {clearMessage, setData, setEmail, setMessage, setNickname} from "@/redux/reducers/authReducer";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {setUserData} from "@/redux/reducers/profileReducer";

import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Auth_path} from "@/app/paths/auth";
import {Main_path, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";
import App from "next/app";
import {instance} from "@/api/api_init";

export const CookieClear = () => {
    Cookies.remove('token')
    Cookies.remove('id')
    Cookies.remove('id_current')
    Cookies.remove('id_post')
    Cookies.remove('id_photo')
    Cookies.remove('email')
}

export const AuthThunk = {
    Authorization(input_email: string, input_nickname: string, input_password: string, router: AppRouterInstance ) {
        return (dispatch: Dispatch) => {
            AuthAPI.AuthorizationAPI({
                input_email, input_nickname, input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearMessage())
                        instance.defaults.headers.common['Authorization'] = `Bearer ${response[1].token}`;
                        Cookies.set('token', response[1].token)
                        Cookies.set('id', response[1].id)
                        Cookies.set('id_current', response[1].id)
                        router.push(MAIN_PATH_FOR_AUTH +`/${response[1].id}` + Main_path.PROFILE)
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            dispatch(setMessage('Такого пользователя не существует'))
                        }else if (response[1] === 'Password mismatch') {
                            dispatch(setMessage('Неверный пароль'))
                        }
                        break
                    }
                    case 403 : {
                        Cookies.set('id', response[1])
                        router.push(Auth_path.RESTORE)
                        break
                    }
                }
            })
        }
    },

    Registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                  input_name: string, input_birthDate: string, router: AppRouterInstance) {
        return (dispatch : Dispatch) => {
            AuthAPI.RegistrationAPI({
                input_email, input_nickname, input_password, input_confirmPassword
            }).then(response => {
                switch (response[0]) {
                    case 201 : {
                        if (response[1] !== null) {
                            Cookies.set('id', response[1])
                            ProfileAPI.RegistrationSocialAPI({
                                input_name,
                                input_birthDate
                            }).then(response => {
                                switch (response) {
                                    case 200: {
                                            router.push(Auth_path.SUCCESSFUL_REGISTRATION)
                                        break
                                    }
                                    case 400: {
                                        dispatch(setMessage('Ошибка регистрации (пользователя не существует)'))
                                    }
                                }
                            })
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === "Password mismatch") {
                            dispatch(setMessage('Пароли не соответствуют'))
                        }
                        break
                    }
                    case 409 : {
                        if (response[1] === "This email is already in use") {
                            dispatch(setMessage('Данный email уже используется'))
                        } else if (response[1] === 'This nickname is already in use') {
                            dispatch(setMessage('Имя пользователя уже занято'))
                        }
                        break
                    }
                    default:
                }
            })
        }
    },

    RecoveryAccount(input_email: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.RecoveryAccountAPI({
                input_email
            }).then(response => {
                switch (response) {
                    case 200: {
                        dispatch(setMessage('Проверьте почту. При входе в аккаунт, сразу поменяйте пароль, время действия высланного пароля ограничено.'))
                        break
                    }
                    case 400: {
                        dispatch(setMessage('Пользователя с данной почтой не существует'))
                        break
                    }
                    case 401: {
                        CookieClear()
                        break
                    }
                    case 409: {
                        dispatch(setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже'))
                    }
                }
            })
        }
    },

    AccountActivationMessage() {
        return (dispatch: Dispatch) => {
            AuthAPI.ActivationAccountAPI()
                .then(response => {
                    switch (response[0]) {
                        case 200 : {
                            dispatch(setMessage('Ваш аккаунт был успешно активирован! Для продолжения войдите в аккаунт'))
                            break
                        }
                        case 400 : {
                            if (response[1] === "User doesn't exist") {
                                dispatch(setMessage('Такого пользователя не существует'))
                            } else if (response[1] === 'Account has already been activated') {
                                dispatch(setMessage('Аккаунт уже активирован'))
                            }
                            break
                        }
                        default:
                    }
                })
        }
    },

    ChangeEmail(input_password: string, input_email: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.RequestChangeEmailAPI( {
                input_password, input_email
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setMessage('На Вашу почту было отправлено письмо с подтверждением почты'))
                        Cookies.set('newEmail', input_email)
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                            dispatch(setMessage('Пользователя с такой почтой не существует'))
                        } else if (response[1] === "Password mismatch") {
                            dispatch(setMessage('Неверный пароль'))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 409 : {
                        dispatch(setMessage('Данный email уже используется'))
                        break
                    }
                    default:
                }
            })
        }
    },

    ConfirmChangingEmail() {
        return (dispatch: Dispatch) => {
            AuthAPI.ConfirmChangingEmailAPI({
                newEmail: Cookies.get('newEmail') as string
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setMessage('Пароль был успешно изменен!'))
                        Cookies.set('token', response[1])
                        instance.defaults.headers.common['Authorization'] = `Bearer ${response[1].token}`;
                        Cookies.set('email', Cookies.get('newEmail') as string)
                        Cookies.remove('newEmail')
                        break
                    }
                    case 400 : {
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                }
            })
        }
    },

    AuthGetData() {
        return async (dispatch: Dispatch) => {
            AuthAPI.AuthDataAPI({
                id: Cookies.get('id_current') as string // todo вынести
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        Cookies.set('email', response[1].email)
                        dispatch(setNickname(response[1].nickname))
                        dispatch(setEmail(response[1].email))
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                }
            })
        }
    },

    GetCodeForChangingPassword(input_password: string) {
        return (dispatch : Dispatch) => {
            AuthAPI.GetCodeForChangingPasswordAPI( {
                input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (response[1] === "Check your mailbox to confirm new password") {
                            dispatch(setMessage('На Вашу почту был отправлен одноразовый код'))
                            Cookies.set('isPasswordTrue', 'true')
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                        } else if (response[1] === "Password mismatch") {
                            dispatch(setMessage('Неверный пароль'))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 409 : {
                        if (response[1] === "The password was changed less than 5 minutes ago, please try again later") {
                            dispatch(setMessage('Пароль был изменен менее 5 минут назад, попробуйте позже'))
                        }
                        break
                    }
                }
            })
        }
    },

    ChangePassword(input_code: string, input_password: string, newPasswordConfirm: string) {
        return (dispatch: Dispatch) => {
            if (input_password === newPasswordConfirm) {
                AuthAPI.ChangePasswordAPI(
                    {
                        input_code, input_password
                    }
                ).then(response => {
                    switch (response[0]) {
                        case 200 : {
                            Cookies.set('token', response[1])
                            instance.defaults.headers.common['Authorization'] = `Bearer ${response[1].token}`;
                            dispatch(setMessage('Пароль успешно изменен'))
                            break
                        }
                        case 400 : {
                            if (response[1] === "User doesn't exist") {
                            } else if (response[1] === "Code doesn't match") {
                                dispatch(setMessage('Неверный код'))
                            } else if (response[1] === "The code is not relevant") {
                                dispatch(setMessage('Истекло время использования кода'))
                            }
                            break
                        }
                        case 401 : {
                            CookieClear()
                            break
                        }
                        default:
                    }
                })
            } else {
                dispatch(setMessage('Пароли не совпадают'))
            }

        }
    },

    DeleteAccount(input_password: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.DeleteAccountAPI({
                input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (response[1] === "Account is blocked") { // todo redo
                            dispatch(clearMessage())
                            dispatch(setData({
                                email: '',
                                nickname: '',
                                password: ''}))
                            dispatch(setUserData('', '', '', '', '', ''))
                            CookieClear()
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 403: {
                        dispatch(setMessage('Аккаунт уже заблокирован'))
                        Cookies.remove('token')
                        break
                    }
                }
            })
        }
    },

    ChangeNickname(input_nickname: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.ChangeNicknameAPI({
                input_nickname
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setNickname(input_nickname))
                        if (response[1].split(' ').length === 2) {
                            Cookies.set('token', response[1].split(' ')[1])
                        } else {
                            Cookies.set('token', response[1])
                        }
                        break
                    }
                    case 400 : {
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                }
            })
        }
    },

    SendMessage(message: string) {
        return (dispatch: Dispatch) => {
            dispatch(setMessage(message))
        }
    },

    LogOut(router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            CookieClear()
            router.push(Auth_path.LOGIN)
        }
    }
}

