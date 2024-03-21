import {
    ChangeProfileDataInterfaceAPI,
    ProfileGetDataInterfaceAPI,
    RegistrationSocialInterfaceAPI
} from "@/api/profile/profileInterface";
import {instance, Paths, setToken} from "@/api/api_init";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const ProfileAPI = {

    async RegistrationSocialAPI(data: RegistrationSocialInterfaceAPI) {
        try {
            const response = await instance.post(
                Paths.SOCIAL + '/registration',
                {
                    id: Cookies.get('id'),
                    name: data.input_name,
                    birthDate: data.input_birthDate
                }
            );
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async ProfileGetDataAPI(data: ProfileGetDataInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/data/${data.id}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeProfileDataAPI(data: ChangeProfileDataInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.post(
                Paths.SOCIAL + '/data',
                {
                    name: data.input_name,
                    birthDate: data.input_birthDate,
                    bio: data.input_bio,
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }

}