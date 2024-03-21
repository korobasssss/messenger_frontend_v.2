import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";
import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

export interface CreatePostInterface {
    createPost(input_postText: string, input_postPhoto: SetPhotoInterface[], router: AppRouterInstance): void

    getPhoto(): void
    getPhotoCount(): void
}
export interface CreatePostInterfaceComponent {
    input_postText: string
    setInput_postText(input_postText: string): void

    input_photoUrl: string[]
    setPhoto(input_photo: React.ChangeEvent<HTMLInputElement>): void
    toProfile() : void
    createPost(): void
}