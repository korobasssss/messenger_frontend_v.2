import React from "react";
import {AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {SetPhotoInterface} from "@/api/photo/photoIntefraceAPI";

export interface EditProfileInterface {
    message: string

    name: string,
    bio: string,
    avatarUrl: string,
    coverUrl: string,
    nickname: string

    getData(): void
    getNickname(): void
    changeProfileData(input_name: string, input_bio: string, router: AppRouterInstance): void
    changeNickname(input_nickname: string): void

    deleteAvatar(deleteAvatarUrl: string): void
    deleteCover(deleteCoverUrl: string): void
    setAvatar(avatarUrl: SetPhotoInterface): void
    setCover(coverUrl: SetPhotoInterface): void

    clearMessage(): void
    setMessageThunk(message: string): void
}

export interface EditProfileComponentInterface {
    message: string,

    input_name: string,
    input_bio: string,
    input_avatarUrl: string,
    input_coverUrl: string,
    input_nickname: string

    setInput_name(input_name: string): void
    setInput_bio(input_bio: string): void
    setInput_avatarUrl(input_avatarUrl: React.ChangeEvent<HTMLInputElement>): void
    setInput_coverUrl(input_coverUrl: React.ChangeEvent<HTMLInputElement>): void
    setInput_nickname(input_nickname: string): void

    setAvatarDeleteFile(flag: boolean): void
    setCoverDeleteFile(flag: boolean): void

    setButtonSavePressed(isButtonSavePressed: boolean): void
    toProfile(): void
}

export interface EditPhotoButtons {
    setInput_photo(input_photo: React.ChangeEvent<HTMLInputElement>) :void
    setPhotoDelete(isPhotoDelete: boolean): void
}