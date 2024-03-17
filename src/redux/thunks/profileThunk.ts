import {Dispatch} from "redux";
import {ProfileAPI} from "@/api/profile/profileAPI";
import {setUserData} from "@/redux/reducers/profileReducer";

export const profileThunk = {

    ProfileData(id: string) {
        return (dispatch: Dispatch) => {
            ProfileAPI.ProfileGetDataAPI({
                id: id
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
                        localStorage.setItem('token', '')
                        break
                    }
                }
            })
        }
    },

    ChangeProfileData(input_name: string, input_birthDate: string,
                      input_bio: string, avatarUrl: string, coverUrl: string) {
        return (dispatch: Dispatch) => {
            ProfileAPI.ChangeProfileDataAPI({
                input_name: input_name,
                input_birthDate: input_birthDate,
                input_bio: input_bio
            }).then(response => {
                switch (response[0]) {
                    case 200 : {
                        setUserData(input_name, input_birthDate, input_bio, avatarUrl, coverUrl, '')
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
    }
}