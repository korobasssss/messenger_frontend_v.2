import {instance, instanceFile, Paths, setToken} from "@/api/api_init";
import {
    DeleteAvatarPhotoInterfaceAPI, DeleteCoverPhotoInterfaceAPI, DeletePhotoPostInterfaceAPI,
    GetPhotoInterfaceAPI,
    SetAvatarInterfaceAPI, SetCoverInterfaceAPI, SetPostPhotoInterfaceAPI
} from "@/api/photo/photoIntefraceAPI";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const PhotoAPI = {

    async GetPhotoAPI(data: GetPhotoInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.BLOG + `/photo/${data.id}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAvatarPhotoAPI(data: DeleteAvatarPhotoInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.delete(
                Paths.FILE + '/social',
                {
                    data: {
                        url: data.deleteAvatarUrl,
                        source: 'AVATAR'
                    }
                }
            );
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async SetAvatarAPI(data: SetAvatarInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)

        let formDataAvatar = new FormData()
        formDataAvatar.append('file', data.input_avatarUrl)
        formDataAvatar.append('url', 'undefined')
        formDataAvatar.append('source', 'AVATAR')

        try {
            const response = await instanceFile.post(
                Paths.FILE + '/social',
                formDataAvatar
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteCoverPhotoAPI(data: DeleteCoverPhotoInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.delete(
                Paths.FILE + '/social',
                {
                    data: {
                        url: data.deleteCoverUrl,
                        source: 'COVER'
                    }
                }
            );
            return response.status;
        } catch (error: any) {
            return error.response.status;
        }
    },

    async SetCoverAPI(data: SetCoverInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)

        let formDataCover = new FormData()
        formDataCover.append('file', data.input_coverUrl)
        formDataCover.append('url', 'undefined')
        formDataCover.append('source', 'COVER')

        try {
            const response = await instanceFile.post(
                Paths.FILE + '/social',
                formDataCover
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async GetPhotoCountAPI() {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)
        try {
            const response = await instance.get(
                Paths.BLOG + `/photo/count/${Cookies.get(Cookie_names.ID_CURRENT)}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SetPostPhotoAPI(data: SetPostPhotoInterfaceAPI) {
        setToken(Cookies.get(Cookie_names.TOKEN) as string)

        let formData = new FormData()
        formData.append('file', data.input_postPhoto)
        formData.append('postId', data.postId)

        try {
            const response = await instanceFile.post(
                Paths.FILE + '/blog',
                formData
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}