import {instance, instanceFile, Paths} from "@/api/api_init";
import {
    DeleteAvatarPhotoInterfaceAPI, DeleteCoverPhotoInterfaceAPI, DeletePhotoPostInterfaceAPI,
    GetPhotoInterfaceAPI,
    SetAvatarInterfaceAPI, SetCoverInterfaceAPI, SetPostPhotoInterfaceAPI
} from "@/api/photo/photoIntefraceAPI";

export const Photo = {

    async GetPhotoAxios(data: GetPhotoInterfaceAPI) {
        try {
            const response = await instance.get(
                Paths.BLOG + `/photo/${data.id}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async DeleteAvatarPhotoAxios(data: DeleteAvatarPhotoInterfaceAPI) {
        try {
            const response = await instance.delete(
                Paths.FILE + '/social',
                {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    },
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

    async SetAvatarAxios(data: SetAvatarInterfaceAPI) {
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

    async DeleteCoverPhotoAxios(data: DeleteCoverPhotoInterfaceAPI) {
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

    async SetCoverAxios(data: SetCoverInterfaceAPI) {
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

    async GetPhotoCountAxios() {
        try {
            const response = await instance.get(
                Paths.BLOG + `/photo/count/${localStorage.getItem('idUser')}`
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    },

    async SetPostPhotoAxios(data: SetPostPhotoInterfaceAPI) {
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
    },

    async DeletePhotoPostAxios(data: DeletePhotoPostInterfaceAPI) {
        try {
            const response = await instance.delete(
                Paths.FILE + '/blog',
                {
                    data: {
                        url: data.url,
                        photoId: data.photoId,
                        postId: data.postId
                    }
                }
            );
            return [response.status, response.data];
        } catch (error: any) {
            return [error.response.status, error.response.data];
        }
    }
}