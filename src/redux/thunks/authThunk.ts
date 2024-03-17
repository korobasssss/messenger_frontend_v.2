import {Dispatch} from "redux";
import {AuthAPI} from "@/api/auth/authAPI";
import {clearMessage, setData, setEmail, setMessage, setNickname} from "@/redux/reducers/authReducer";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {setUserData} from "@/redux/reducers/profileReducer";

export const AuthThunk = {
    Authorization(input_email: string, input_nickname: string, input_password: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.AuthorizationAPI({
                input_email, input_nickname, input_password
            }).then(response => {
                debugger
                switch (response[0]) {
                    case 200 : {
                        dispatch(clearMessage())

                        if (response[1].token.split(' ').length === 2) {
                            localStorage.setItem('token', response[1].token.split(' ')[1])
                        } else {
                            localStorage.setItem('token', response[1].token)
                        }
                        localStorage.setItem('id', response[1].id)
                        localStorage.setItem('idUser', response[1].id)
                        localStorage.setItem('password', input_password)
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
                        dispatch(setMessage('Аккаунт не активирован'))
                        localStorage.setItem('id', response[1])
                        break
                    }
                }
            })
        }
    },

    Registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                  input_name: string, input_birthDate: string) {
        return (dispatch : Dispatch) => {
            AuthAPI.RegistrationAPI({
                input_email, input_nickname, input_password, input_confirmPassword
            }).then(response => {
                switch (response[0]) {
                    case 201 : {
                        if (response[1] !== null) {
                            localStorage.setItem('id', response[1])
                            ProfileAPI.RegistrationSocialAPI({
                                input_name,
                                input_birthDate
                            }).then(response => {
                                switch (response) {
                                    case 200: {
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
                        localStorage.setItem('token', '')  // todo what
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
                        dispatch(setMessage('На Вашу почту было отправлено письмо с подтверждением бла бла бла'))
                        localStorage.setItem('newEmail', input_email)  //todo redo
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
                        localStorage.setItem('token', '')
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

    ConfirmChangingEmail(newEmail: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.ConfirmChangingEmailAPI({
                newEmail: localStorage.getItem('newEmail') as string
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        localStorage.setItem('newEmail', '')
                        dispatch(setMessage('Пароль был успешно изменен!'))
                        localStorage.setItem('token', response[1])
                        break
                    }
                    case 400 : {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    AuthGetData(id: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.AuthDataAPI({
                id
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setNickname(response[1].nickname))
                        dispatch(setEmail(response[1].email))
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    // AuthGetMyData() {
    //     return (dispatch: Dispatch) => {
    //         AuthAPI.AuthDataAxios({
    //             id: localStorage.getItem('id') as string
    //         }).then(response => {
    //             dispatch(setIsFetching(false))
    //             switch (response[0]) {
    //                 case 200 : {
    //                     dispatch(setMyNickname(response[1].nickname))
    //                     break
    //                 }
    //                 case 401 : {
    //                     localStorage.setItem('token', '')
    //                     break
    //                 }
    //             }
    //         })
    //     }
    // },

    GetCodeForChangingPassword(input_password: string) {
        return (dispatch : Dispatch) => {
            AuthAPI.GetCodeForChangingPasswordAPI( {
                input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (response[1] === "Check your mailbox to confirm new password") {
                            dispatch(setMessage('На Вашу почту был отправлен одноразовый код'))
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
                        localStorage.setItem('token', '')
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

    ChangePassword(input_code: string, input_password: string) {
        return (dispatch: Dispatch) => {
            AuthAPI.ChangePasswordAPI(
                {
                    input_code, input_password
                }
            ).then(response => {
                switch (response[0]) {
                    case 200 : {
                        localStorage.setItem('password', input_password)
                        if (response[1].split(' ').length === 2) {
                            localStorage.setItem('token', response[1].split(' ')[1])
                        } else {
                            localStorage.setItem('token', response[1])
                        }
                        dispatch(clearMessage())
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
                        localStorage.setItem('token', '')
                        break
                    }
                    default:
                }
            })
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
                            localStorage.setItem('email', '')
                            localStorage.setItem('token', '')
                            localStorage.setItem('password', '')
                            localStorage.setItem('id', '')
                            localStorage.setItem('idUser', '')
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === "User doesn't exist") {
                        }
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                    case 403: {
                        dispatch(setMessage('Аккаунт уже заблокирован'))
                        localStorage.setItem('token', '')
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
                            localStorage.setItem('token', response[1].split(' ')[1])
                        } else {
                            localStorage.setItem('token', response[1])
                        }
                        break
                    }
                    case 400 : {
                        break
                    }
                    case 401 : {
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    LogoutClear() {
        return (dispatch: Dispatch) => {
            dispatch(setData({
                email: '',
                nickname: '',
                password: ''}))
            dispatch(setUserData('', '', '', '', '', ''))  // todo redo

            localStorage.setItem('token', '')
            localStorage.setItem('id', '')
            localStorage.setItem('idUser', '')
            localStorage.setItem('email', '')
            localStorage.setItem('password', '')
        }
    }
}