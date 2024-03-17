import {
    ChangeProfileDataInterfaceAPI,
    ProfileGetDataInterfaceAPI,
    RegistrationSocialInterfaceAPI
} from "@/api/profile/profileInterface";
import {instance, Paths} from "@/api/api_init";

export const ProfileAPI = {

    async RegistrationSocialAPI(data: RegistrationSocialInterfaceAPI) {
        try {
            debugger
            const response = await instance.post(
                Paths.SOCIAL + '/registration',
                {
                    id: localStorage.getItem('id'),
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