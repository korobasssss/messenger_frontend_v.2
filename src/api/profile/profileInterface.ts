export interface RegistrationSocialInterfaceAPI {
    input_name: string
    input_birthDate: string
}

export interface ProfileGetDataInterfaceAPI {
    id: string
}

export interface ChangeProfileDataInterfaceAPI {
    input_name: string,
    input_birthDate: string,
    input_bio: string,
}