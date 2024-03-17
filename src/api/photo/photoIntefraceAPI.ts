export interface GetPhotoInterfaceAPI {
    id: string
}

export interface DeleteAvatarPhotoInterfaceAPI {
    deleteAvatarUrl: string
}

export interface SetAvatarInterfaceAPI {
    input_avatarUrl: File
}

export interface DeleteCoverPhotoInterfaceAPI {
    deleteCoverUrl: string
}

export interface SetCoverInterfaceAPI {
    input_coverUrl: File
}

export interface SetPhotoInterface {
    flag: boolean,
    input_postPhoto:File
}

export interface SetPostPhotoInterfaceAPI {
    input_postPhoto: File,
    postId: string
}

export interface DeletePhotoPostInterfaceAPI {
    url: string,
    photoId: string,
    postId: string,
}