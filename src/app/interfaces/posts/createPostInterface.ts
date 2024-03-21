import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {setMessageThunk} from "@/redux/thunks/authThunk";

export interface CreatePostInterfaceState {
    auth : {
        message: string
    }
}

export interface CreatePostInterface {
    message: string

    createPost(input_postText: string, input_postPhoto: SetPhotoInterface[], router: AppRouterInstance): void

    getPhoto(): void
    getPhotoCount(): void
    clearMessage(): void
    setMessageThunk(message: string): void
}
export interface CreatePostInterfaceComponent {
    message: string
    input_postText: string

    setInput_postText(input_postText: string): void

    input_photoUrl: string[]
    setPhoto(input_photo: React.ChangeEvent<HTMLInputElement>): void
    toProfile() : void
    createPost(): void
}