import {Dispatch} from "redux";
import {AuthAPI} from "@/api/auth/authAPI";
import {clearAuth, clearMessage, setEmail, setMessage, setNickname} from "@/redux/reducers/authReducer";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {clearProfile} from "@/redux/reducers/profileReducer";

import Cookies from "js-cookie";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Auth_path} from "@/app/paths/auth";
import {Main_path, MAIN_PATH_FOR_AUTH} from "@/app/paths/main";
import {setToken} from "@/api/api_init";
import {AuthMessagesEN, AuthMessagesRU} from "@/redux/messages/authMessages";
import {clearPhoto} from "@/redux/reducers/photoReducer";
import {clearPosts} from "@/redux/reducers/postsReducer";
import {clearUsers} from "@/redux/reducers/usersReducer";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const clearMessages = () => {
    return (dispatch: Dispatch) => {
        dispatch(clearMessage())
    }
}

export const setMessageThunk = (message: string) => (dispatch: Dispatch) => {
    dispatch(setMessage(message))
}

export const clearReducers = () => {
    return (dispatch: Dispatch) => {
        dispatch(clearAuth())
        dispatch(clearPhoto())
        dispatch(clearPosts())
        dispatch(clearProfile())
        dispatch(clearUsers())
    }
}
export const CookieClear = () => {
    Cookies.remove(Cookie_names.ID)
    Cookies.remove(Cookie_names.ID_CURRENT)
    Cookies.remove(Cookie_names.ID_POST)
    Cookies.remove(Cookie_names.ID_PHOTO)
    Cookies.remove(Cookie_names.EMAIL)

    clearReducers()
    clearMessages()
}

    export
const AuthThunk = {
    Authorization(input_email: string, input_nickname: string, input_password: string, router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            AuthAPI.AuthorizationAPI({
                input_email, input_nickname, input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        const token = response[1].token
                        Cookies.set(Cookie_names.TOKEN, token)
                        setToken(token)

                        Cookies.set(Cookie_names.ID, response[1].id)
                        Cookies.set(Cookie_names.ID_CURRENT, response[1].id)
                        dispatch(clearMessage())

                        router.push(MAIN_PATH_FOR_AUTH + `/${response[1].id}` + Main_path.PROFILE)
                        break
                    }
                    case 400 : {
                        if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                            dispatch(setMessage(AuthMessagesRU.USER_DOESNT_EXIST))
                        } else if (response[1] === AuthMessagesEN.PASSWORD_MISMATCH) {
                            dispatch(setMessage(AuthMessagesRU.INVALID_PASSWORD))
                        }
                        break
                    }
                    case 403 : {
                        Cookies.set(Cookie_names.ID, response[1])
                        router.push(Auth_path.RESTORE)

                        dispatch(clearMessage())
                        break
                    }
                }
            })
        }
    },

    Registration(input_email: string, input_nickname: string, input_password: string, input_confirmPassword: string,
                 input_name: string, input_birthDate: string, router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            AuthAPI.RegistrationAPI({
                input_email, input_nickname, input_password, input_confirmPassword
            }).then(response => {
                switch (response[0]) {
                    case 201 : {
                        if (response[1] !== null) {
                            Cookies.set(Cookie_names.ID, response[1])
                            ProfileAPI.RegistrationSocialAPI({
                                input_name,
                                input_birthDate
                            }).then(response => {
                                switch (response) {
                                    case 200: {
                                        router.push(Auth_path.SUCCESSFUL_REGISTRATION)
                                        dispatch(clearMessage())
                                        break
                                    }
                                    case 400: {
                                        dispatch(setMessage(AuthMessagesRU.REGISTRATION_ERROR))
                                    }
                                }
                            })
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === AuthMessagesEN.PASSWORD_MISMATCH) {
                            dispatch(setMessage(AuthMessagesRU.PASSWORD_MISMATCH))
                        }
                        break
                    }
                    case 409 : {
                        if (response[1] === AuthMessagesEN.EMAIL_IN_USE) {
                            dispatch(setMessage(AuthMessagesRU.EMAIL_IN_USE))
                        } else if (response[1] === AuthMessagesEN.NICKNAME_IN_USE) {
                            dispatch(setMessage(AuthMessagesRU.NICKNAME_IN_USE))
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
                        dispatch(setMessage(AuthMessagesRU.RECOVERY_CHECK_EMAIL))
                        break
                    }
                    case 400: {
                        dispatch(setMessage(AuthMessagesRU.EMAIL_DOESNT_EXIST))
                        break
                    }
                    case 401: {
                        CookieClear()
                        break
                    }
                    case 409: {
                        dispatch(setMessage(AuthMessagesRU.PASSWORD_WAS_CHANGED_LESS_5_MIN))
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
                            dispatch(setMessage(AuthMessagesRU.ACTIVATE_ACCOUNT))
                            break
                        }
                        case 400 : {
                            if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                                dispatch(setMessage(AuthMessagesRU.USER_DOESNT_EXIST))
                            } else if (response[1] === AuthMessagesEN.ALREADY_ACTIVATED) {
                                dispatch(setMessage(AuthMessagesRU.ALREADY_ACTIVATED))
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
            AuthAPI.RequestChangeEmailAPI({
                input_password, input_email
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setMessage(AuthMessagesRU.CONFIRM_EMAIL))
                        Cookies.set(Cookie_names.NEW_EMAIL, input_email)
                        break
                    }
                    case 400 : {
                        if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                            dispatch(setMessage(AuthMessagesRU.EMAIL_DOESNT_EXIST))
                        } else if (response[1] === AuthMessagesEN.PASSWORD_MISMATCH) {
                            dispatch(setMessage(AuthMessagesRU.INVALID_PASSWORD))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 409 : {
                        dispatch(setMessage(AuthMessagesRU.EMAIL_IN_USE))
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
                newEmail: Cookies.get(Cookie_names.NEW_EMAIL) as string
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        const token = response[1].token
                        setToken(token)
                        Cookies.set('email', Cookies.get('newEmail') as string)
                        Cookies.remove('newEmail')

                        dispatch(clearMessage())
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

                        dispatch(clearMessage())
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
        return (dispatch: Dispatch) => {
            AuthAPI.GetCodeForChangingPasswordAPI({
                input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        if (response[1] === AuthMessagesEN.SENT_CODE_TO_EMAIL) {
                            dispatch(setMessage(AuthMessagesRU.SENT_CODE_TO_EMAIL))
                            Cookies.set('isPasswordTrue', 'true')
                        }
                        break
                    }
                    case 400 : {
                        if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                            dispatch(setMessage(AuthMessagesRU.USER_DOESNT_EXIST))
                        } else if (response[1] === AuthMessagesEN.PASSWORD_MISMATCH) {
                            dispatch(setMessage(AuthMessagesRU.PASSWORD_MISMATCH))
                        }
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 409 : {
                        if (response[1] === AuthMessagesEN.PASSWORD_WAS_CHANGED_LESS_5_MIN) {
                            dispatch(setMessage(AuthMessagesRU.PASSWORD_WAS_CHANGED_LESS_5_MIN))
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
                            const token = response[1].token
                            setToken(token)

                            dispatch(clearMessage())
                            break
                        }
                        case 400 : {
                            if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                            } else if (response[1] === AuthMessagesEN.INVALID_CODE) {
                                dispatch(setMessage(AuthMessagesRU.INVALID_CODE))
                            } else if (response[1] === AuthMessagesEN.CODE_DOESNT_RELEVANT) {
                                dispatch(setMessage(AuthMessagesRU.CODE_DOESNT_RELEVANT))
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
                dispatch(setMessage(AuthMessagesRU.PASSWORD_MISMATCH))
            }

        }
    },

    DeleteAccount(input_password: string, router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            AuthAPI.DeleteAccountAPI({
                input_password
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        break
                    }
                    case 400 : {
                        if (response[1] === AuthMessagesEN.USER_DOESNT_EXIST) {
                            dispatch(setMessage(AuthMessagesRU.USER_DOESNT_EXIST))
                        }
                        break
                    }
                    case 401 : {
                        break
                    }
                    case 403: {
                        dispatch(setMessage(AuthMessagesRU.ACCOUNT_ALREADY_BLOCKED))
                        break
                    }
                }
            })
            CookieClear()
            router.push(Auth_path.LOGIN)
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
                        Cookies.set('token', response[1])
                        break
                    }
                    case 400 : {
                        break
                    }
                    case 401 : {
                        CookieClear()
                        break
                    }
                    case 409 : {
                        if (response[1] === AuthMessagesEN.NICKNAME_IN_USE) {
                            dispatch(setMessage(AuthMessagesRU.NICKNAME_IN_USE))
                        }
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
        return () => {
            CookieClear()

            router.push(Auth_path.LOGIN)
        }
    }
}

