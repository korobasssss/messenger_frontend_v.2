import {
    ChangeProfileDataInterfaceAPI,
    ProfileGetDataInterfaceAPI,
    RegistrationSocialInterfaceAPI
} from "@/api/profile/profileInterface";
import {instance, Paths} from "@/api/api_init";

export const Profile = {

    async RegistrationSocialAxios(data: RegistrationSocialInterfaceAPI) {
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

    async ProfileGetDataAxios(data: ProfileGetDataInterfaceAPI) {
        try {
            const response = await instance.get(
                Paths.SOCIAL + `/data/${data.id}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async ChangeProfileDataAxios(data: ChangeProfileDataInterfaceAPI) {
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