'use client'

import {Dispatch} from "redux";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {setBio, setName, setUserData} from "@/redux/reducers/profileReducer";
import Cookies from "js-cookie";
import {AuthThunk, CookieClear} from "@/redux/thunks/authThunk";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Main_path, MAIN_PATH} from "@/app/paths/main";
import {Cookie_names} from "@/redux/messages/cookie_names";
import {clearMessage} from "@/redux/reducers/authReducer";

export const maxPhotoCount = 6

export const profileThunk = {

    ProfileData() {
        return (dispatch: Dispatch) => {
            ProfileAPI.ProfileGetDataAPI({
                id: Cookies.get(Cookie_names.ID_CURRENT) as string
            }).then(responseSocial => {
                switch (responseSocial[0]) {
                    case 200 : {
                        dispatch(setUserData(responseSocial[1].name, responseSocial[1].birthDate,
                            responseSocial[1].bio, responseSocial[1].avatarUrl,
                            responseSocial[1].coverUrl, responseSocial[1].status))
                        break
                    }
                    case 400: {
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

    ChangeProfileData(input_name: string, input_bio: string, router: AppRouterInstance) {
        return (dispatch: Dispatch) => {
            ProfileAPI.ChangeProfileDataAPI({
                input_name: input_name,
                input_birthDate: '',
                input_bio: input_bio
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        dispatch(setName(input_name))
                        dispatch(setBio(input_bio))
                        dispatch(clearMessage())
                        router.push(MAIN_PATH + Cookies.get(Cookie_names.ID_CURRENT) + Main_path.PROFILE)
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
    }
}